#!/bin/bash
# Builds the website image for ECS Fargate (linux/amd64) and pushes it to ECR as <repo>:<VERSION>.
# Run it from the branch you're deploying (main), after bumping VERSION. See DEPLOY.md.
set -euo pipefail
cd "$(dirname "$0")"

ACCOUNT=088136761930
REGION=eu-west-2
REPO=blackhawk-technologies-ui
VERSION=$(tr -d '[:space:]' < VERSION)
IMAGE="$ACCOUNT.dkr.ecr.$REGION.amazonaws.com/$REPO:$VERSION"

if [ -n "$(git status --porcelain)" ]; then
  echo "Warning: uncommitted changes will be in this image." >&2
fi
echo "Building $IMAGE from $(git rev-parse --abbrev-ref HEAD)@$(git rev-parse --short HEAD)..."

aws ecr get-login-password --region "$REGION" | \
  docker login --username AWS --password-stdin "$ACCOUNT.dkr.ecr.$REGION.amazonaws.com"

docker buildx build \
  --platform linux/amd64 \
  -t "$IMAGE" \
  --push .

echo "Pushed $IMAGE"
