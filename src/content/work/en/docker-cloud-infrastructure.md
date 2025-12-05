---
title: Docker & Cloud Infrastructure
publishDate: 2023-01-15 00:00:00
img: /assets/docker-infrastructure.jpg
img_alt: Docker infrastructure showing containers and microservices architecture
description: |
  Design and implementation of complete infrastructure with Docker Compose, Cloudflare Tunnels, and multi-environment deployment.
tags:
  - Docker
  - DevOps
  - Cloudflare
  - AWS
  - Infrastructure
featured: false
visible: false
---

## About the Project

Complete cloud infrastructure designed from scratch to support multiple services with high availability, security, and scalability. Implementation of microservices architecture with Docker and public access via Cloudflare Tunnels.

## Tech Stack

- **Docker & Docker Compose** - Container orchestration
- **Cloudflare Tunnels** - Secure public access without exposing ports
- **AWS AppRunner** - NestJS backend deployment
- **AWS Amplify** - SvelteKit frontend hosting
- **Linux** - Ubuntu/Debian server
- **Nginx** - Reverse proxy and static files
- **MySQL** - Containerized database

## Architecture

### Custom Docker Network
```yaml
Network: 172.27.0.0/16
Gateway: 172.27.0.1

Services with static IPs:
- Backend (NestJS): 172.27.0.26
- Frontend (SvelteKit): 172.27.0.28
- MySQL: 172.27.0.24
- n8n: 172.27.0.32
- Portfolio (Astro): 172.27.0.30
```

### Cloudflare Tunnel
Persistent tunnel implementation for secure exposure:

```bash
Tunnel ID: 89b4b089-2935-4d15-84be-0d7e734531e6
Domain: aaronccenta.site

Public Endpoints:
- https://aaronccenta.site → Portfolio
- https://app.aaronccenta.site → Frontend
- https://backendlite.aaronccenta.site → API
- https://n8n.aaronccenta.site → Workflows
- ssh.aaronccenta.site → SSH Access (TCP)
```

### Docker Compose
Orchestration of 5 main services:

1. **Backend (NestJS)**
   - Hot reload for development
   - Cached volumes for better performance
   - Automatically managed dependencies

2. **Frontend (SvelteKit)**
   - Port 5173 exposed
   - Node modules excluded from bind mount
   - Optimized build for production

3. **MySQL**
   - Custom configuration (my.cnf)
   - Automatic initialization scripts
   - Persistent volumes

4. **n8n**
   - Environment variables for workflows
   - Integration with backend via API
   - Data persistence

5. **Portfolio (Astro)**
   - Static site with SSR
   - Multi-language (es/en)
   - Hot reload enabled

## Features

### Multi-Environment
Environment variable system for managing multiple environments:

```bash
.env configuration:
- DB_ENV=development|production
- SUBNET=172.27.0.0/16
- GATEWAY=172.27.0.1
- Environment-specific configuration
```

### Security
- Automatic SSL/TLS via Cloudflare
- Credentials managed by environment variables
- Firewall configured (only Cloudflare ingress)
- SSH tunnel for secure remote access
- Containers isolated in private network

### Monitoring
- Centralized logs with `docker compose logs`
- Health checks for each service
- Automatic restart in case of failure

### Documentation
Complete `CLAUDE.md` file with:
- Common commands guide
- Detailed architecture
- Cloudflare configuration
- Testing endpoints
- Development workflows

## Deployment Workflow

```bash
# Local development
docker compose up -d

# View real-time logs
docker compose logs -f [service]

# Rebuild after changes
docker compose up -d --build

# Public access via Cloudflare
cloudflared tunnel run integrador-tunnel
```

## Results

- ✅ **Zero downtime** with automatic restart
- ✅ **Horizontal scalability** ready to implement
- ✅ **Enterprise security** with Cloudflare
- ✅ **Development parity** between local and production
- ✅ **Complete documentation** for the team
- ✅ **CI/CD ready** for automation

## Learnings

This project consolidated my experience in:
- Microservices architecture
- DevOps and automation
- Networking and DNS
- Cloud infrastructure
- Security and best practices

The infrastructure currently supports multiple projects in production with high availability and zero-downtime deployments.
