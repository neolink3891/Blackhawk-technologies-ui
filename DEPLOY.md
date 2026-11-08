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
| ECS | cluster `<TODO: cluster>`, service `<TODO: service>`, task definition `<TODO: family>` (container port 4173) |
| Production branch | `main` (`development` is merged into it for a release) |

## Local check

```bash
docker build -t blackhawk-technologies-ui:test .
docker run --rm -p 8080:4173 blackhawk-technologies-ui:test
# http://localhost:8080/  /sekro/privacy  /sekro/terms  /es/sekro/privacy  /es/sekro/terms  /sitemap.xml
```

## Release

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
   aws ecs describe-task-definition --task-definition <family> --query taskDefinition > td.json
   # edit td.json: set containerDefinitions[0].image to the new tag; remove taskDefinitionArn, revision, status,
   # requiresAttributes, compatibilities, registeredAt, registeredBy
   aws ecs register-task-definition --cli-input-json file://td.json
   aws ecs update-service --cluster <cluster> --service <service> --task-definition <family>
   aws ecs wait services-stable --cluster <cluster> --services <service>
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
