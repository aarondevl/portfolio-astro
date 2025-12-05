---
title: SmartPay Integration Service
publishDate: 2025-12-01 00:00:00
img: /assets/smartpay/payment-orchestration.png
img_alt: Diagrama de arquitectura del servicio de orquestación de pagos conectando con Culqi y MercadoPago
description: |
  Microservicio backend especializado en el procesamiento de pagos, integrando pasarelas como Culqi y MercadoPago.
tags:
  - NestJS
  - Culqi
  - MercadoPago
  - Swagger
  - MikroORM
featured: true
visible: true
---

> [!NOTE]
> Servicio crítico en producción que procesa transacciones financieras en tiempo real.

## Sobre el Proyecto

**SmartPay** es el motor financiero del ecosistema Multitest. Es un backend especializado encargado de orquestar todas las transacciones de pago, garantizando seguridad, trazabilidad y conciliación.

Actúa como una capa de abstracción unificada sobre múltiples pasarelas de pago, permitiendo a las aplicaciones cliente (como SmartLite) procesar cobros sin lidiar con la complejidad específica de cada proveedor.

## About the Project

This service acts as an abstraction layer for payment processing, allowing the platform to interact with multiple payment gateways through a single unified interface.

### Key Features

- **Multi-Gateway Support**: Integration with **Culqi** and **MercadoPago**.
- **Unified API**: A standardized interface for frontend clients, regardless of the underlying provider.
- **Security**: Secure handling of sensitive transaction data.

### Technologies Used

- **NestJS**: Framework for modular and testable architecture.
- **Adapter Pattern**: Design pattern used to standardize different payment APIs.
- **Axios**: For HTTP requests to providers.

> This service provides flexibility to switch or add payment providers without affecting the rest of the application.

## Infraestructura
- **Docker**: Entorno contenerizado para desarrollo y producción.
- **Testing**: Pruebas unitarias y E2E para garantizar la integridad financiera.
- **CI/CD**: Pipelines automatizados para despliegue seguro.onfigurables:
- Basic: 100 créditos
- Professional: 500 créditos (+10% bonus)
- Enterprise: 2000 créditos (+20% bonus)

Uso:
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
