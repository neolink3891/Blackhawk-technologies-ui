# Deploying www.blackhawk-technologies.com

The site is a server-rendered TanStack Start app. The Docker image runs it with `srvx` (Node) on port **4173**;
there's no nginx in the image. Releases are a new image tag in ECR, rolled out to the existing service behind the
ALB. Hosting, DNS and the load balancer don't change for a release.

## The existing setup

| | |
|---|---|
| Site | `https://www.blackhawk-technologies.com` (`SITE_URL` in `src/lib/site.ts`: sitemap, canonical, hreflang) |
| DNS | GoDaddy (`ns45/ns46.domaincontrol.com`). `www` → CNAME `bht-apps-alb-1372409103.eu-west-2.elb.amazonaws.com`; the bare `blackhawk-technologies.com` is GoDaddy forwarding (301 → `https://www.…`) |
| Load balancer | `bht-apps-alb` (eu-west-2) |
| Image | ECR `088136761930.dkr.ecr.eu-west-2.amazonaws.com/blackhawk-technologies-ui:<VERSION>` (`build.sh`) |
| ECS | cluster `bhtapps-prod`, service `blackhawk-technologies-ui-service`, task definition family `blackhawk-technologies-ui` (container port 4173) |
| Production branch | `main` (`development` is merged into it for a release) |

## Deploy history

Newest first. Task definition revisions are `blackhawk-technologies-ui:<n>`; roll back by updating the service to the
previous one:
`aws ecs update-service --region eu-west-2 --cluster bhtapps-prod --service blackhawk-technologies-ui-service --task-definition blackhawk-technologies-ui:<previous>`.

| Date | Version | Task definition | Notes |
|---|---|---|---|
| 2026-11-14 | 1.0.6 | `blackhawk-technologies-ui:7` (rollback `:6`) | assetlinks.json: Sekro Play app-signing + upload key fingerprints (verified by Google's Digital Asset Links API) |
| 2026-11-12 | 1.0.5 | `blackhawk-technologies-ui:6` (rollback `:5`) | Sekro invite page + .well-known, HawkTrack card, Adhki Cogno/NeoLogger removal, lockfile fix for npm 10 |

## Local check

```bash
docker build -t blackhawk-technologies-ui:test .
docker run --rm -p 8080:4173 blackhawk-technologies-ui:test
# http://localhost:8080/  /sekro/privacy  /sekro/terms  /es/sekro/privacy  /es/sekro/terms  /sitemap.xml
```

## Release

> **ECR tags are mutable.** Pushing a tag that already exists silently replaces that image, including the one
> production may be running. Always bump `VERSION` (and commit it) before running `build.sh`; check the existing tags
> with `aws ecr describe-images --repository-name blackhawk-technologies-ui --region eu-west-2`.

1. Merge and tag:
   ```bash
   git checkout main && git merge --ff-only development
   # bump VERSION (e.g. 1.0.0 → 1.0.1); a tag already in ECR must not be reused. Commit it.
   ```
2. Build and push (from `main`; `build.sh` builds the working tree, linux/amd64 for Fargate):
   ```bash
   ./build.sh   # → …/blackhawk-technologies-ui:<VERSION>
   ```
3. Roll out: in ECS, create a new revision of the task definition with the new image tag, then update the service to
   that revision (rolling deploy; the target group's health check gates it). CLI equivalent:
   ```bash
   aws ecs describe-task-definition --task-definition blackhawk-technologies-ui --region eu-west-2 --query taskDefinition > td.json
   # edit td.json: set containerDefinitions[0].image to the new image (:6 onwards pin it by digest,
   # …/blackhawk-technologies-ui@sha256:<digest of the new tag>, from aws ecr describe-images); remove taskDefinitionArn, revision, status,
   # requiresAttributes, compatibilities, registeredAt, registeredBy
   aws ecs register-task-definition --region eu-west-2 --cli-input-json file://td.json
   aws ecs update-service --region eu-west-2 --cluster bhtapps-prod --service blackhawk-technologies-ui-service \
     --task-definition blackhawk-technologies-ui
   aws ecs wait services-stable --region eu-west-2 --cluster bhtapps-prod --services blackhawk-technologies-ui-service
   ```
4. Push the branch: `git push origin main development`.

The image's health check and the ALB both use `GET /` (200). The container stops cleanly on SIGTERM (srvx is PID 1).

## After a release

```bash
for p in / /sekro/privacy /sekro/terms /es/sekro/privacy /es/sekro/terms /sitemap.xml /robots.txt; do
  curl -s -o /dev/null -w "%{http_code} https://www.blackhawk-technologies.com$p\n" "https://www.blackhawk-technologies.com$p"
done
```

## Known gaps in the current setup (not changed by a release)

- `http://www.blackhawk-technologies.com/` answers 200 instead of redirecting to HTTPS: the ALB's HTTP:80 listener
  rule for this host forwards rather than redirects.
