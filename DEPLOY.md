# Deploying bhtapp.com

The site is a server-rendered TanStack Start app. The Docker image runs it with `srvx` (Node) on port **4173**;
there's no nginx: TLS ends at the ALB (and Cloudflare in front of it). Image: ECR → ECS Fargate service behind
`bht-apps-alb`. DNS: Cloudflare.

| | |
|---|---|
| AWS account / region | `088136761930` / `eu-west-2` |
| ECR repository | `blackhawk-technologies-ui` (tag = `VERSION`) |
| Production branch | `main` (`development` is merged into it for a release) |

## Local check

```bash
docker build -t blackhawk-technologies-ui:test .
docker run --rm -p 8080:4173 blackhawk-technologies-ui:test
# http://localhost:8080/  /sekro/privacy  /sekro/terms  /es/sekro/privacy  /es/sekro/terms
```

## Release

```bash
git checkout main && git merge --ff-only development
# bump VERSION (e.g. 1.0.0 → 1.0.1) if this tag was pushed before, commit it
./build.sh            # builds linux/amd64 and pushes 088136761930.dkr.ecr.eu-west-2.amazonaws.com/blackhawk-technologies-ui:<VERSION>
git push origin main
```

Then in ECS: create a new task definition revision with the new image tag, and update the service to it
(rolling deploy; the ALB health check gates it).

## AWS resources (one-time)

**ECR**: private repository `blackhawk-technologies-ui`.

**Certificate (ACM, eu-west-2)**: `*.bhtapp.com` does **not** cover the apex `bhtapp.com`. Use a certificate with
`bhtapp.com` and `*.bhtapp.com` (or add a second one for `bhtapp.com`) on the ALB's HTTPS:443 listener.

**Task definition** `blackhawk-technologies-ui`:
- Fargate, Linux/X86_64, network mode `awsvpc`, CPU 0.25 vCPU (256), memory 0.5 GB (512)
- Task execution role: `ecsTaskExecutionRole` (ECR pull + CloudWatch Logs). No task role needed.
- Container `web`: image `088136761930.dkr.ecr.eu-west-2.amazonaws.com/blackhawk-technologies-ui:<VERSION>`,
  essential, port mapping 4173/TCP. Environment is set in the image (`NODE_ENV=production`, `HOST=0.0.0.0`,
  `PORT=4173`).
- Container health check: `CMD-SHELL, wget -q -O /dev/null http://127.0.0.1:4173/ || exit 1`, interval 30, timeout 5,
  retries 3, start period 10.
- Logs: `awslogs`, group `/ecs/blackhawk-technologies-ui`, region `eu-west-2`, stream prefix `ecs`.

**Target group** `bht-website-tg`: type IP, HTTP, port 4173, same VPC as the ALB. Health check HTTP `/`, success
code 200, interval 30 s, timeout 5 s, healthy 2, unhealthy 3. Deregistration delay 30 s.

**Service** `blackhawk-technologies-ui` on your cluster: Fargate, desired count 1 (2 for zero-downtime across AZs),
min 100 % / max 200 %, load balancer `bht-apps-alb` → container `web:4173` → `bht-website-tg`, health check grace
period 30 s. Subnets: private with NAT (or public with "assign public IP" on, to reach ECR). Security group: inbound
TCP 4173 from the ALB's security group only.

**ALB listener rules**, HTTPS:443 on `bht-apps-alb` (priorities: any free ones, above any catch-all):
1. Host header `bhtapp.com` → forward to `bht-website-tg`.
2. Host header `www.bhtapp.com` → redirect, HTTPS, port 443, host `bhtapp.com`, path `/#{path}`, query `#{query}`,
   status 301.

HTTP:80 should already redirect to HTTPS:443 (default action); if not, add that.

**Before touching DNS**, test through the ALB with the real host name (checks the certificate and the rule):

```bash
ALB=<bht-apps-alb DNS name>
for p in / /sekro/privacy /sekro/terms /es/sekro/privacy /es/sekro/terms; do
  curl -s -o /dev/null -w "%{http_code} $p\n" --connect-to bhtapp.com:443:$ALB:443 https://bhtapp.com$p
done
curl -sI --connect-to www.bhtapp.com:443:$ALB:443 https://www.bhtapp.com/sekro/terms | grep -i '^location'
```

## Cloudflare (zone bhtapp.com)

1. Remove the current `bhtapp.com` (`@`) and `www` records (they point at the previous host).
2. Add `CNAME @ → <bht-apps-alb DNS name>`, proxied (Cloudflare flattens it at the apex).
3. Add `CNAME www → bhtapp.com`, proxied (the ALB rule redirects it).
4. SSL/TLS mode: **Full (strict)** (the ALB presents the ACM certificate). Check there's no Redirect Rule / Page
   Rule for these hosts left over from the previous setup.

## After it's live

```bash
for p in /sekro/privacy /sekro/terms /es/sekro/privacy /es/sekro/terms; do
  curl -s -o /dev/null -w "%{http_code} https://bhtapp.com$p\n" https://bhtapp.com$p
done
```
