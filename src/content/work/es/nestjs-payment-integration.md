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

## Stack Tecnológico

### Backend (NestJS)
- **Core**: NestJS con TypeScript para una arquitectura robusta y tipada.
- **Base de Datos**: **MikroORM** con MySQL para persistencia transaccional.
- **Documentación**: API documentada exhaustivamente con **Swagger/OpenAPI**.
- **Logging**: Sistema de logs estructurados con Pino para auditoría financiera.
- **Emailing**: Notificaciones transaccionales vía Postmark.

## Integraciones Clave

### Pasarelas de Pago
- **Culqi**: Procesamiento de tarjetas de crédito/débito y Yape. Manejo de autenticación 3DS.
- **MercadoPago**: Integración completa para cobros en Latinoamérica.
- **Webhooks**: Sistema robusto para recibir y validar notificaciones asíncronas de pago.

## Características Principales

- **Abstracción de Pagos**: API unificada para crear órdenes y procesar cargos independientemente del proveedor.
- **Seguridad**: Manejo seguro de tokens y validación de firmas en webhooks.
- **Trazabilidad**: Registro detallado de cada intento de transacción y respuesta de las pasarelas.
- **Notificaciones**: Envío automático de comprobantes y alertas de pago a clientes y comercios.
- **Soporte Multi-moneda**: Manejo de Soles (PEN) y Dólares (USD) con precisión decimal.

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
