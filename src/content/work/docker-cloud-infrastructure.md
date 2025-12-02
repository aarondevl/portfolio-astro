---
title: Docker & Cloud Infrastructure
publishDate: 2024-10-15 00:00:00
img: /assets/docker-infrastructure.jpg
img_alt: Infraestructura Docker mostrando contenedores y arquitectura de microservicios
description: |
  Diseño e implementación de infraestructura completa con Docker Compose, Cloudflare Tunnels y despliegue multi-ambiente.
tags:
  - Docker
  - DevOps
  - Cloudflare
  - AWS
  - Infrastructure
---

## Sobre el Proyecto

Infraestructura cloud completa diseñada desde cero para soportar múltiples servicios con alta disponibilidad, seguridad y escalabilidad. Implementación de arquitectura de microservicios con Docker y acceso público mediante Cloudflare Tunnels.

## Stack Tecnológico

- **Docker & Docker Compose** - Orquestación de contenedores
- **Cloudflare Tunnels** - Acceso público seguro sin exponer puertos
- **AWS AppRunner** - Despliegue de backend NestJS
- **AWS Amplify** - Hosting de frontend SvelteKit
- **Linux** - Servidor Ubuntu/Debian
- **Nginx** - Reverse proxy y static files
- **MySQL** - Base de datos en contenedor

## Arquitectura

### Red Docker Personalizada
```yaml
Red: 172.27.0.0/16
Gateway: 172.27.0.1

Servicios con IPs estáticas:
- Backend (NestJS): 172.27.0.26
- Frontend (SvelteKit): 172.27.0.28
- MySQL: 172.27.0.24
- n8n: 172.27.0.32
- Portfolio (Astro): 172.27.0.30
```

### Cloudflare Tunnel
Implementación de túnel persistente para exposición segura:

```bash
Tunnel ID: 89b4b089-2935-4d15-84be-0d7e734531e6
Domain: aaronccenta.site

Endpoints públicos:
- https://aaronccenta.site → Portfolio
- https://app.aaronccenta.site → Frontend
- https://backendlite.aaronccenta.site → API
- https://n8n.aaronccenta.site → Workflows
- ssh.aaronccenta.site → SSH Access (TCP)
```

### Docker Compose
Orquestación de 5 servicios principales:

1. **Backend (NestJS)**
   - Hot reload para desarrollo
   - Volúmenes cached para mejor performance
   - Dependencias gestionadas automáticamente

2. **Frontend (SvelteKit)**
   - Puerto 5173 expuesto
   - Node modules excluidos del bind mount
   - Build optimizado para producción

3. **MySQL**
   - Configuración personalizada (my.cnf)
   - Scripts de inicialización automáticos
   - Volúmenes persistentes

4. **n8n**
   - Variables de entorno para workflows
   - Integración con backend vía API
   - Persistencia de datos

5. **Portfolio (Astro)**
   - Sitio estático con SSR
   - Multi-idioma (es/en)
   - Hot reload habilitado

## Características

### Multi-Ambiente
Sistema de variables de entorno para gestión de múltiples ambientes:

```bash
.env configuración:
- DB_ENV=development|production
- SUBNET=172.27.0.0/16
- GATEWAY=172.27.0.1
- Configuración específica por ambiente
```

### Seguridad
- SSL/TLS automático vía Cloudflare
- Credenciales gestionadas por variables de entorno
- Firewall configurado (solo Cloudflare ingress)
- Túnel SSH para acceso remoto seguro
- Contenedores aislados en red privada

### Monitoreo
- Logs centralizados con `docker compose logs`
- Health checks para cada servicio
- Restart automático en caso de falla

### Documentación
Archivo `CLAUDE.md` completo con:
- Guía de comandos comunes
- Arquitectura detallada
- Configuración de Cloudflare
- Endpoints de testing
- Flujos de desarrollo

## Deployment Workflow

```bash
# Desarrollo local
docker compose up -d

# Ver logs en tiempo real
docker compose logs -f [service]

# Rebuild después de cambios
docker compose up -d --build

# Acceso público vía Cloudflare
cloudflared tunnel run integrador-tunnel
```

## Resultados

- ✅ **Zero downtime** con restart automático
- ✅ **Escalabilidad horizontal** lista para implementar
- ✅ **Seguridad enterprise** con Cloudflare
- ✅ **Development parity** entre local y producción
- ✅ **Documentación completa** para el equipo
- ✅ **CI/CD ready** para automatización

## Aprendizajes

Este proyecto consolidó mi experiencia en:
- Arquitectura de microservicios
- DevOps y automatización
- Networking y DNS
- Cloud infrastructure
- Seguridad y mejores prácticas

La infraestructura soporta actualmente múltiples proyectos en producción con alta disponibilidad y zero-downtime deployments.
