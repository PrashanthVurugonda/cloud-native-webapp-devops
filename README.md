# Cloud-Native Web Application with CI/CD + IaC + Monitoring

Production-style DevOps portfolio project using Node.js, Express, PostgreSQL, Docker, GitHub Actions, Terraform, Prometheus, and Grafana.

## Project Structure

- `src/` - API application source code
- `tests/` - API test suite
- `infra/terraform/` - AWS infrastructure as code
- `monitoring/` - Prometheus and Grafana configuration
- `.github/workflows/` - CI/CD pipelines

## Features

- REST API with health endpoint and CRUD endpoints
- PostgreSQL integration
- Dockerized app and database setup
- GitHub Actions CI (lint, test, db init)
- GitHub Actions CD (container build and push to GHCR)
- Terraform for AWS EC2 or ECS infrastructure with security groups
- Prometheus + Grafana setup with alert rules

## API Endpoints

- `GET /health`
- `POST /api/v1/tasks`
- `GET /api/v1/tasks`
- `GET /api/v1/tasks/:id`
- `PUT /api/v1/tasks/:id`
- `DELETE /api/v1/tasks/:id`

## Quick Start

### 1) Configure environment

```bash
cp .env.example .env
```

### 2) Run app and database

```bash
docker compose up -d --build
```

### 3) Verify app health

```bash
curl http://localhost:3000/health
```

### 4) Run monitoring stack

```bash
docker compose -f docker-compose.monitoring.yml up -d
```

- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3001` (default admin/admin)

## Local Development

```bash
npm install
npm run dev
```

## Testing and Linting

```bash
npm run lint
npm test
```

## Terraform Deployment (AWS EC2 or ECS)

```bash
cd infra/terraform
terraform init
cp terraform.tfvars.example terraform.tfvars`n# edit terraform.tfvars`nterraform plan`nterraform apply
```

## CI/CD

- `ci.yml`: lint + tests + DB init on pushes and PRs
- `cd.yml`: Docker image build and push to GitHub Container Registry on main

## Resume Bullet Ideas

- Built and deployed a cloud-native Node.js web API with PostgreSQL using Dockerized environments.
- Automated CI/CD with GitHub Actions for linting, testing, and container delivery.
- Provisioned AWS infrastructure using Terraform with reproducible, version-controlled IaC.
- Implemented monitoring and alerting stack using Prometheus and Grafana.

### Deployment target

- `deployment_target = "ec2"` for EC2-based deployment.
- `deployment_target = "ecs"` for ECS Fargate deployment.

### EC2 deployment script

```bash
chmod +x scripts/deploy-ec2.sh
REPO_URL=https://github.com/<you>/<repo>.git BRANCH=main ./scripts/deploy-ec2.sh
```
