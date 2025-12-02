---
title: Payment Gateway Integration
publishDate: 2024-09-20 00:00:00
img: /assets/backend-swagger.jpg
img_alt: Documentación Swagger mostrando endpoints de API de pagos y gestión de créditos
description: |
  Sistema completo de procesamiento de pagos con Culqi y MercadoPago, gestión de créditos y facturación automática.
tags:
  - NestJS
  - Payments
  - Backend
  - Integration
---

## Sobre el Proyecto

Sistema robusto de procesamiento de pagos integrado con las principales pasarelas de pago en Perú y Latinoamérica. Incluye gestión de créditos, facturación automática y webhooks para sincronización en tiempo real.

## Stack Tecnológico

- **NestJS** - Framework backend modular
- **TypeScript** - Type safety y desarrollo robusto
- **Culqi** - Pasarela de pagos Perú
- **MercadoPago** - Pasarela de pagos LATAM
- **MySQL** - Base de datos transaccional
- **MikroORM** - ORM con soporte transaccional
- **Webhooks** - Eventos en tiempo real

## Arquitectura del Sistema

### Módulo Payments
Estructura modular siguiendo principios SOLID:

```typescript
payments/
├── entities/
│   ├── payment.entity.ts
│   └── transaction.entity.ts
├── dto/
│   ├── create-payment.dto.ts
│   └── payment-response.dto.ts
├── payments.controller.ts
├── payments.service.ts
└── payments.module.ts
```

### Módulo Credits
Sistema de gestión de créditos para clientes B2B:

```typescript
credits/
├── entities/
│   ├── credit-package.entity.ts
│   └── credit-usage.entity.ts
├── credits.service.ts
└── credits.module.ts
```

## Características Principales

### Integración Multi-Gateway

**Culqi (Perú)**
- Tarjetas de crédito/débito
- Pagos recurrentes
- 3D Secure
- Webhooks de confirmación

**MercadoPago (LATAM)**
- Múltiples métodos de pago
- Pagos en cuotas
- QR payments
- Marketplace support

### Flujo de Pago

1. **Creación de orden**
   - Validación de datos del cliente
   - Cálculo de montos y comisiones
   - Generación de token de pago

2. **Procesamiento**
   - Envío a pasarela seleccionada
   - Manejo de respuesta asíncrona
   - Actualización de estado en tiempo real

3. **Confirmación**
   - Webhook de pasarela
   - Validación de firma
   - Acreditación de créditos
   - Envío de factura por email

4. **Gestión de Créditos**
   - Acreditación automática post-pago
   - Tracking de uso por servicio
   - Alertas de saldo bajo
   - Reportes de consumo

### Seguridad

- **Validación de Webhooks**: Firma criptográfica
- **PCI Compliance**: No almacenamiento de datos sensibles
- **Transacciones ACID**: Consistencia garantizada
- **Logging exhaustivo**: Auditoría completa
- **Rate limiting**: Protección contra abuso

### Sistema de Créditos

```typescript
Paquetes configurables:
- Basic: 100 créditos
- Professional: 500 créditos (+10% bonus)
- Enterprise: 2000 créditos (+20% bonus)

Uso:
- 1 crédito = 1 evaluación psicométrica
- Tracking en tiempo real
- Expiración configurable
- Renovación automática (opcional)
```

## Integración con Otros Módulos

### Mailing (Postmark)
- Confirmación de pago
- Factura electrónica
- Alertas de saldo

### Notifications
- Notificaciones push
- Alertas en dashboard
- Reportes periódicos

### Users
- Historial de pagos
- Preferencias de facturación
- Métodos de pago guardados

## Manejo de Errores

Implementación robusta de error handling:

```typescript
- Pagos rechazados
- Timeouts de pasarela
- Webhooks duplicados
- Errores de red
- Validación de datos
```

Retry automático con backoff exponencial para fallos transitorios.

## Monitoreo y Reporting

### Métricas Tracked
- Tasa de éxito de pagos
- Tiempo promedio de procesamiento
- Monto total procesado
- Conversión por pasarela
- Errores y rechazos

### Dashboards
- Panel de administración
- Reportes por período
- Análisis por pasarela
- Tracking de créditos
- Alertas automáticas

## Testing

Suite completa de tests:

```typescript
- Unit tests para servicios
- Integration tests para pasarelas (sandbox)
- E2E tests para flujos completos
- Mock de webhooks
- Test de rollback transaccional
```

## Resultados

- ✅ **Miles de transacciones** procesadas mensualmente
- ✅ **99.9% success rate** en procesamiento
- ✅ **<3s** tiempo promedio de respuesta
- ✅ **Zero data loss** con transacciones ACID
- ✅ **Facturación automática** 100% confiable
- ✅ **Multi-currency** support (PEN, USD)

## Desafíos Superados

1. **Reconciliación de pagos**: Sistema automático de matching entre webhooks y órdenes
2. **Idempotencia**: Prevención de cargos duplicados
3. **Failover**: Cambio automático de pasarela en caso de falla
4. **Compliance**: Cumplimiento de regulaciones PCI-DSS

Este módulo es crítico para el negocio, procesando el 100% de los ingresos de la plataforma con alta confiabilidad y seguridad.
