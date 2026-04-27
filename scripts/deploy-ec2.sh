#!/usr/bin/env bash
set -euo pipefail

APP_DIR=${APP_DIR:-/opt/cloud-native-webapp}
REPO_URL=${REPO_URL:-""}
BRANCH=${BRANCH:-main}
ENV_FILE=${ENV_FILE:-.env}

if [[ -z "$REPO_URL" ]]; then
  echo "REPO_URL is required. Example: REPO_URL=https://github.com/you/repo.git"
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required but not installed"
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose plugin is required"
  exit 1
fi

sudo mkdir -p "$APP_DIR"
sudo chown -R "$USER":"$USER" "$APP_DIR"

if [[ ! -d "$APP_DIR/.git" ]]; then
  git clone --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
else
  git -C "$APP_DIR" fetch origin "$BRANCH"
  git -C "$APP_DIR" checkout "$BRANCH"
  git -C "$APP_DIR" reset --hard "origin/$BRANCH"
fi

cd "$APP_DIR"

if [[ ! -f "$ENV_FILE" ]]; then
  cp .env.example "$ENV_FILE"
  echo "Created $ENV_FILE from .env.example. Update it before production use."
fi

docker compose pull
docker compose up -d --build

echo "Deployment complete. Health: http://$(curl -s ifconfig.me):3000/health"
