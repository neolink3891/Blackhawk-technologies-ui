# Deploying www.blackhawk-technologies.com

The site is a server-rendered TanStack Start app. The Docker image runs it with `srvx` (Node) on port **4173**;
there's no nginx in the image. Releases are a new image tag in ECR, rolled out to the existing service behind the
ALB. Hosting, DNS and the load balancer don't change for a release.

## The existing setup

|                   |                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site              | `https://www.blackhawk-technologies.com` (`SITE_URL` in `src/lib/site.ts`: sitemap, canonical, hreflang)                                                                                          |
| DNS               | GoDaddy (`ns45/ns46.domaincontrol.com`). `www` → CNAME `bht-apps-alb-1372409103.eu-west-2.elb.amazonaws.com`; the bare `blackhawk-technologies.com` is GoDaddy forwarding (301 → `https://www.…`) |
| Load balancer     | `bht-apps-alb` (eu-west-2)                                                                                                                                                                        |
| Image             | ECR `088136761930.dkr.ecr.eu-west-2.amazonaws.com/blackhawk-technologies-ui:<VERSION>` (`build.sh`)                                                                                               |
| ECS               | cluster `bhtapps-prod`, service `blackhawk-technologies-ui-service`, task definition family `blackhawk-technologies-ui` (container port 4173)                                                     |
| Production branch | `main` (`development` is merged into it for a release)                                                                                                                                            |

## Deploy history

Newest first. Task definition revisions are `blackhawk-technologies-ui:<n>`; roll back by updating the service to the
previous one:
`aws ecs update-service --region eu-west-2 --cluster bhtapps-prod --service blackhawk-technologies-ui-service --task-definition blackhawk-technologies-ui:<previous>`.

| Date       | Version | Task definition                               | Notes                                                                                                            |
| ---------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 2026-11-19 | 1.0.7   | `blackhawk-technologies-ui:8` (rollback `:7`) | New favicons + web manifest, WebP logos, Sekro on Google Play (badges, JSON-LD), repo-wide prettier              |
| 2026-11-14 | 1.0.6   | `blackhawk-technologies-ui:7` (rollback `:6`) | assetlinks.json: Sekro Play app-signing + upload key fingerprints (verified by Google's Digital Asset Links API) |
| 2026-11-12 | 1.0.5   | `blackhawk-technologies-ui:6` (rollback `:5`) | Sekro invite page + .well-known, HawkTrack card, Adhki Cogno/NeoLogger removal, lockfile fix for npm 10          |

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

### 1. HTTP → HTTPS for `www`: fixed 2026-11-19

`http://www.blackhawk-technologies.com` used to answer 200: on `bht-apps-alb`'s HTTP:80 listener, rule priority 4
(`a1601d4614b9986e`, host `*blackhawk-technologies.com`) forwarded to the `blackhawk-technologies-ui` target group,
so the listener's default 301 never applied. On 2026-11-19 that rule's action was changed (in the console) to a 301
to `HTTPS:443`, keeping `#{host}/#{path}?#{query}`. The rule only matches `*blackhawk-technologies.com`; the other
services' rules and the 443 listener weren't touched.

**Verification, 2026-11-19 10:34 UTC: passed.** (An earlier check at 10:21 UTC, before the change was saved, still
got 200.)

| Request                                                                                                                                      | Result                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `HEAD`/`GET http://www.blackhawk-technologies.com/`                                                                                          | 301 → `https://www.blackhawk-technologies.com:443/`                         |
| `HEAD`/`GET http://www.blackhawk-technologies.com/sekro?x=1`                                                                                 | 301 → `https://www.blackhawk-technologies.com:443/sekro?x=1`                |
| `HEAD`/`GET http://www.blackhawk-technologies.com/es/sekro/privacy?a=1&b=2`                                                                  | 301 → `https://www.blackhawk-technologies.com:443/es/sekro/privacy?a=1&b=2` |
| the `/sekro?x=1` request sent to each ALB IP (3 nodes)                                                                                       | 301 on all                                                                  |
| following the redirect                                                                                                                       | 200 after 1 redirect                                                        |
| `HEAD https://www.blackhawk-technologies.com/` (and `/sekro`, `/es/sekro`, `/sekro/privacy`, `/sitemap.xml`, `/.well-known/assetlinks.json`) | 200                                                                         |

The `:443` in `Location` is how the ALB writes a redirect with an explicit port; browsers treat it as the default
HTTPS port. Checks and rollback:

```bash
curl -sI http://www.blackhawk-technologies.com/ | grep -iE '^HTTP|^location'
curl -s -o /dev/null -D - "http://www.blackhawk-technologies.com/sekro?x=1" | grep -iE '^HTTP|^location'
curl -sI https://www.blackhawk-technologies.com/ | head -1

# Rollback: forward plain HTTP to the site again (the rule's action before the change)
AWS_PROFILE=bht-deploy aws elbv2 modify-rule --region eu-west-2 \
  --rule-arn arn:aws:elasticloadbalancing:eu-west-2:088136761930:listener-rule/app/bht-apps-alb/9b2385ebef0f4325/afb00534c975ade2/a1601d4614b9986e \
  --actions '[{"Type":"forward","TargetGroupArn":"arn:aws:elasticloadbalancing:eu-west-2:088136761930:targetgroup/blackhawk-technologies-ui/d686c0da61b659d5"}]'
```

### 2. The bare domain is GoDaddy forwarding, not the ALB

`blackhawk-technologies.com` resolves to GoDaddy's forwarding service (`3.33.251.168`, `15.197.225.128`). `GET /`
301s to `https://www.blackhawk-technologies.com`, but `HEAD` gets 405 and any path (`/sekro?x=1`) gets 404: the
path and query are dropped. The fix is to move DNS to Route 53 and point the apex at the ALB, which already handles it.

**What's in place already** (checked 2026-11-19, read-only):

- Certificate: the 443 listener serves an Amazon-issued (ACM) certificate for `blackhawk-technologies.com` and
  `*.blackhawk-technologies.com` (expires 2027-06-03; ACM renews it automatically while its DNS validation record
  still resolves).
- ALB rules for the apex: priority 1 on both listeners 301s `blackhawk-technologies.com` to
  `https://www.blackhawk-technologies.com/#{path}?#{query}`.
- Registrar: GoDaddy. **The registration expires on 2026-12-26.** Confirm auto-renew (or renew) before anything else,
  and don't change nameservers in the days just before expiry.
- DNSSEC: unsigned (nothing to carry over).

**Current GoDaddy records** (from querying `ns45.domaincontrol.com` directly; the server refuses a full zone
transfer, so this covers the apex and about 70 common names, not everything):

| Name                             | Type  | Value                                                               |
| -------------------------------- | ----- | ------------------------------------------------------------------- |
| `blackhawk-technologies.com`     | NS    | `ns45.domaincontrol.com`, `ns46.domaincontrol.com`                  |
| `blackhawk-technologies.com`     | SOA   | `ns45.domaincontrol.com. dns.jomax.net. … 600` (negative TTL 600 s) |
| `blackhawk-technologies.com`     | A     | `3.33.251.168`, `15.197.225.128` (GoDaddy forwarding)               |
| `www.blackhawk-technologies.com` | CNAME | `bht-apps-alb-1372409103.eu-west-2.elb.amazonaws.com`               |
| `_domainconnect`                 | CNAME | `_domainconnect.gd.domaincontrol.com` (GoDaddy-only; don't copy)    |
| ACM validation (`_<hash>`)       | CNAME | `_<hash>.acm-validations.aws` (name not discoverable without ACM)   |

**Email:** there is no MX, SPF, DKIM, DMARC, MTA-STS or autodiscover record (apex `MX`/`TXT` are empty; `_dmarc`, `mail`,
and the usual DKIM selectors (`google`, `selector1`/`selector2`, `default`, `k1`, `s1`/`s2`, `zoho`, `resend`, …) all
return nothing). The domain doesn't send or receive mail today (the site's contact address is `@bhtapp.com`), so
the move can't break email. Confirm against the GoDaddy zone export in step 1.

**Plan:**

1. **Inventory.** In GoDaddy: renew the domain or confirm auto-renew. Then export the zone file (DNS → ⋯ → Export zone
   file), which is the authoritative list. In ACM (eu-west-2), open the `blackhawk-technologies.com` certificate and
   copy its DNS validation CNAME name and value. Diff both against the table above.
2. **Permissions.** Use an IAM user with Route 53 access (`bht-latineats-api` has none) and `elasticloadbalancing:Describe*`.
3. **Create the zone.** Route 53 → public hosted zone `blackhawk-technologies.com`. Note its four `awsdns` nameservers.
4. **Records in Route 53:**
   - `blackhawk-technologies.com` A **alias** → `bht-apps-alb` (dualstack name, eu-west-2), replacing GoDaddy forwarding;
   - `www` A **alias** → `bht-apps-alb` (or keep the CNAME);
   - the ACM validation CNAME, exactly as ACM shows it (without it the certificate won't auto-renew in 2027);
   - anything else the zone export shows, except `_domainconnect` and GoDaddy's forwarding A records;
   - optional, recommended since the domain sends no mail: `TXT "v=spf1 -all"`, `_dmarc TXT "v=DMARC1; p=reject"`,
     and a null MX (`0 .`), so nobody can spoof `@blackhawk-technologies.com`.
5. **Check before switching.** Query the new zone directly, e.g. `dig @ns-XXX.awsdns-XX.com blackhawk-technologies.com A`, for
   every record. And confirm in ACM that the certificate still shows the validation record as found.
6. **Lower TTLs** on the GoDaddy records to 600 s a day ahead (the `.com` NS delegation itself is cached up to 48 h).
7. **Switch.** GoDaddy → Domain → Nameservers → "I'll use my own nameservers" → the four Route 53 nameservers. Leave
   the GoDaddy DNS records and forwarding settings in place (unused once the NS change propagates) as the rollback.
8. **Verify** over the next 48 h:
   ```bash
   dig +short NS blackhawk-technologies.com           # the awsdns servers
   curl -sI http://blackhawk-technologies.com/sekro?x=1  # 301 -> https://www.blackhawk-technologies.com/sekro?x=1
   curl -sI https://blackhawk-technologies.com/         # 301 -> https://www.blackhawk-technologies.com/
   curl -sI https://www.blackhawk-technologies.com/     # 200
   ```
   (`http://` bare goes through port 80 rule 1, which already redirects straight to `https://www`.)
9. **Rollback:** set the nameservers back to GoDaddy's defaults (`ns45`/`ns46.domaincontrol.com`); the old zone is still
   there. Delete nothing at GoDaddy until a week after the switch.
10. **Afterwards:** update the DNS row in "The existing setup" and remove this section.
