---
title: n8n Workflow Automation
publishDate: 2024-08-10 00:00:00
img: /assets/n8n-workflows.jpg
img_alt: Panel de n8n mostrando workflows automatizados conectados al backend NestJS
description: |
  Automatización empresarial con n8n integrado al backend NestJS para procesamiento automático de evaluaciones y notificaciones.
tags:
  - n8n
  - Automation
  - Integration
  - Workflows
---

## Sobre el Proyecto

Sistema de automatización empresarial usando n8n conectado directamente al backend NestJS vía REST API. Automatiza procesos críticos del negocio como procesamiento de evaluaciones, envío de notificaciones y sincronización con sistemas externos.

## Stack Tecnológico

- **n8n** - Plataforma de workflow automation
- **NestJS API** - Backend para ejecución de lógica de negocio
- **MySQL** - Base de datos compartida con backend
- **Docker** - Containerización y networking
- **Webhooks** - Triggers externos

## Arquitectura

### Integración con Backend

```yaml
n8n Container:
  IP: 172.27.0.32:5678
  Networking: Red Docker privada

Variables de entorno configuradas:
  - BACKEND_BASE_URL: http://172.27.0.26:9592/api/v1
  - MYSQL_HOST: 172.27.0.24
  - ENV: local|development|production

Autenticación:
  - Basic Auth habilitado
  - Credenciales en variables de entorno
```

### Workflows Principales

**1. Procesamiento de Evaluaciones**
```
Trigger: Webhook de frontend
↓
Validar datos del candidato
↓
Llamar API: POST /api/v1/psychometric-test/start
↓
Enviar email de bienvenida (Postmark)
↓
Registrar en MySQL
↓
Notificación a administradores
```

**2. Gestión de Créditos**
```
Trigger: Cron job (diario)
↓
Consultar API: GET /api/v1/credits/low-balance
↓
Filtrar clientes con <10 créditos
↓
Enviar alertas por email
↓
Crear notificación in-app
↓
Log en base de datos
```

**3. Sincronización con Legacy Systems**
```
Trigger: Webhook de pago confirmado
↓
Obtener datos: GET /api/v1/payments/{id}
↓
Transformar formato
↓
HTTP Request a SmartPay API
↓
Actualizar estado: PATCH /api/v1/payments/{id}
↓
Enviar factura por email
```

**4. Reportes Automáticos**
```
Trigger: Cron (fin de mes)
↓
Query MySQL: Métricas del período
↓
Procesar datos con JavaScript
↓
Generar reporte PDF
↓
Enviar a stakeholders
↓
Archivar en storage
```

## Nodos Más Utilizados

### HTTP Request
Conexión con backend NestJS:
```javascript
Method: POST/GET/PATCH
URL: {{ $env.BACKEND_BASE_URL }}/endpoint
Authentication: Bearer Token
Headers: Content-Type: application/json
```

### MySQL
Consultas directas a base de datos:
```sql
-- Obtener evaluaciones pendientes
SELECT * FROM psychometric_test
WHERE status = 'pending'
AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR);
```

### Email (Postmark)
Envío de emails transaccionales:
- Confirmaciones de pago
- Resultados de evaluaciones
- Alertas administrativas
- Reportes periódicos

### Webhook
Recepción de eventos externos:
- Confirmación de pagos
- Eventos de frontend
- Triggers de sistemas legacy
- Notificaciones de terceros

## Variables de Entorno

Configuración dinámica por ambiente:

```bash
# Workflow Environment
N8N_WORKFLOW_ENV=local|development|production

# Backend URLs
BACKEND_BASE_URL=http://172.27.0.26:9592/api/v1

# MySQL Access
MYSQL_HOST=172.27.0.24
MYSQL_DATABASE=my_database
MYSQL_USER=root
MYSQL_PASSWORD=***
```

## Workflows de Negocio

### Onboarding de Clientes
1. Cliente se registra en frontend
2. Webhook dispara workflow n8n
3. Crear usuario en backend (API call)
4. Enviar email de bienvenida
5. Asignar créditos promocionales
6. Notificar a equipo de ventas

### Procesamiento de Evaluaciones
1. Candidato completa test
2. Webhook con resultados
3. Calcular score (lógica en backend)
4. Descontar crédito del cliente
5. Generar PDF de resultados
6. Enviar a RRHH del cliente
7. Actualizar dashboard en tiempo real

### Monitoreo de Sistema
1. Cron job cada hora
2. Health check de servicios
3. Query de métricas en MySQL
4. Detección de anomalías
5. Alertas si hay problemas
6. Log para auditoría

## Ventajas de n8n

### Low-Code Automation
- Visual workflow builder
- Sin necesidad de desplegar código
- Cambios en caliente
- Testing integrado

### Flexibilidad
- Code nodes con JavaScript
- HTTP requests ilimitados
- Conexión directa a MySQL
- Integración con 200+ apps

### Observabilidad
- Logs detallados de ejecución
- Historial completo
- Error handling visual
- Retry automático

## Seguridad

- **Credenciales encriptadas** en n8n
- **Variables de entorno** para secrets
- **Red Docker privada** sin exposición
- **Basic Auth** habilitado
- **HTTPS** vía Cloudflare Tunnel

## Despliegue

### Docker Compose
```yaml
n8n:
  image: n8nio/n8n:latest
  ports:
    - "5678:5678"
  environment:
    - N8N_BASIC_AUTH_ACTIVE=true
    - ENV=${N8N_WORKFLOW_ENV}
    - BACKEND_BASE_URL=${N8N_BACKEND_BASE_URL}
  volumes:
    - n8n_data:/home/node/.n8n
  networks:
    - my_network
```

### Acceso Público
```
https://n8n.aaronccenta.site
↓
Cloudflare Tunnel
↓
n8n:5678 (Docker)
```

## Resultados

- ✅ **20+ workflows** activos en producción
- ✅ **Miles de ejecuciones** mensuales
- ✅ **99% success rate** en automatizaciones
- ✅ **Ahorro de 10+ horas/semana** en tareas manuales
- ✅ **Zero code deployments** para nuevos workflows
- ✅ **Integración perfecta** con backend NestJS

## Casos de Uso

1. **Envío masivo de evaluaciones** programadas
2. **Sincronización automática** con CRM
3. **Reportes personalizados** para clientes
4. **Backup automático** de datos críticos
5. **Monitoreo y alertas** proactivas
6. **Migración de datos** entre sistemas

Este sistema de automatización ha transformado operaciones manuales en procesos automáticos confiables, permitiendo al equipo enfocarse en tareas de alto valor.
