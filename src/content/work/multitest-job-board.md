---
title: Multitest Job Board Platform
publishDate: 2024-11-01 00:00:00
img: /assets/multitest-dashboard.jpg
img_alt: Dashboard de Smartlite mostrando plataforma de job board y evaluaciones de candidatos
description: |
  Plataforma integral de job board con sistema de evaluación psicométrica para Multitest Resources S.A.C. procesando miles de evaluaciones mensuales.
tags:
  - NestJS
  - SvelteKit
  - Docker
  - MySQL
  - AWS
---

## Sobre el Proyecto

Plataforma completa de job board desarrollada para **Multitest Resources S.A.C.**, empresa especializada en evaluaciones psicométricas con más de 4 años en el mercado. El sistema procesa miles de evaluaciones de candidatos mensualmente para empresas B2B.

## Stack Tecnológico

### Backend
- **NestJS** con TypeScript para arquitectura modular escalable
- **MikroORM** para gestión de base de datos MySQL
- **JWT & Passport** para autenticación y autorización
- **Swagger** para documentación completa de APIs
- **Pino Logger** para logging estructurado
- **nestjs-i18n** para internacionalización (español/inglés)

### Frontend
- **SvelteKit** para interfaz de usuario reactiva
- TypeScript para type safety
- Diseño responsive y moderno

### Infraestructura
- **Docker Compose** para orquestación de servicios
- **Cloudflare Tunnels** para acceso público seguro
- **AWS AppRunner & Amplify** para despliegue en producción
- **n8n** para automatización de workflows

## Características Principales

### Arquitectura Modular
El sistema está dividido en 15+ módulos especializados:
- `auth/` - Autenticación JWT con roles
- `users/` - Gestión de usuarios y perfiles
- `credits/` - Sistema de créditos para clientes
- `psychometric-test/` - Evaluaciones psicométricas
- `processes/` - Gestión de procesos de selección
- `payments/` - Integración con Culqi y MercadoPago
- `mailing/` - Servicio de correos con Postmark
- `notifications/` - Sistema de notificaciones
- `http-smart-pay/` - Integración con servicios externos

### Multi-Ambiente
Sistema de configuración dinámica para múltiples ambientes:
- **Local**: Desarrollo local con Docker
- **Development**: Ambiente de staging/innovation
- **Production**: Ambiente de producción

Control mediante variable `DB_ENV` con conexiones específicas para cada ambiente.

### Integraciones
- **Pasarelas de Pago**: Culqi y MercadoPago para procesamiento de pagos
- **Email Service**: Postmark para envío masivo de correos
- **Workflows**: n8n conectado al backend vía REST API
- **External APIs**: Integración con sistemas legacy SmartPay

### Seguridad
- Autenticación JWT con refresh tokens
- Guards personalizados para protección de rutas
- Roles y permisos granulares
- Middleware de validación
- CORS configurado apropiadamente

## Resultados

- ✅ **Miles de evaluaciones** procesadas mensualmente
- ✅ **Arquitectura escalable** soportando crecimiento continuo
- ✅ **99.9% uptime** con infraestructura cloud robusta
- ✅ **Sistema multi-tenant** para múltiples clientes B2B
- ✅ **Documentación completa** con Swagger y CLAUDE.md
- ✅ **Migración exitosa** desde sistemas legacy PHP

## Infraestructura

```yaml
Servicios Docker:
- integrador-backend-lite (NestJS): 172.27.0.26:9592
- integrador-frontend-lite (SvelteKit): 172.27.0.28:5173
- mysql: 172.27.0.24:3306
- n8n: 172.27.0.32:5678

Endpoints Públicos:
- https://backendlite.aaronccenta.site - API Backend
- https://app.aaronccenta.site - Frontend SvelteKit
- https://n8n.aaronccenta.site - Automatización
```

## Impacto

Este proyecto representa 4+ años de experiencia en sistemas psicométricos, desde el diseño de arquitectura hasta el despliegue en producción. Ha permitido a Multitest Resources S.A.C. escalar su negocio y ofrecer soluciones empresariales robustas a sus clientes.
