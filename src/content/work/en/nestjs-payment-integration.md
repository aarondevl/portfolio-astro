---
title: SmartPay Integration Service
publishDate: 2025-12-01 00:00:00
img: /assets/smartpay/payment-orchestration.png
img_alt: Architecture diagram of payment orchestration service connecting Culqi and MercadoPago
description: |
  Backend microservice specialized in payment processing, integrating gateways like Culqi and MercadoPago.
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
> Critical production service processing financial transactions in real-time.

## About the Project

**SmartPay** is the financial engine of the Multitest ecosystem. It is a specialized backend responsible for orchestrating all payment transactions, ensuring security, traceability, and reconciliation.

It acts as a unified abstraction layer over multiple payment gateways, allowing client applications (like SmartLite) to process payments without dealing with the specific complexity of each provider.

## Technical Details

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

## Infrastructure
- **Docker**: Containerized environment for development and production.
- **Testing**: Unit and E2E tests to ensure financial integrity.
- **CI/CD**: Automated pipelines for secure deployment.

### Configurable Plans:
- Basic: 100 credits
- Professional: 500 credits (+10% bonus)
- Enterprise: 2000 credits (+20% bonus)

Usage:
- Real-time tracking
- Configurable expiration
- Automatic renewal (optional)
```

## Integration with Other Modules

### Mailing (Postmark)
- Payment confirmation
- Electronic invoice
- Balance alerts

### Notifications
- Push notifications
- Dashboard alerts
- Periodic reports

### Users
- Payment history
- Billing preferences
- Saved payment methods

## Error Handling

Robust error handling implementation:

```typescript
- Rejected payments
- Gateway timeouts
- Duplicate webhooks
- Network errors
- Data validation
```

Automatic retry with exponential backoff for transient failures.

## Monitoring and Reporting

### Tracked Metrics
- Payment success rate
- Average processing time
- Total amount processed
- Conversion by gateway
- Errors and rejections

### Dashboards
- Administration panel
- Period reports
- Gateway analysis
- Credit tracking
- Automatic alerts

## Testing

Complete test suite:

```typescript
- Unit tests for services
- Integration tests for gateways (sandbox)
- E2E tests for complete flows
- Webhook mocking
- Transactional rollback tests
```

## Results

- ✅ **Thousands of transactions** processed monthly
- ✅ **99.9% success rate** in processing
- ✅ **<3s** average response time
- ✅ **Zero data loss** with ACID transactions
- ✅ **Automatic invoicing** 100% reliable
- ✅ **Multi-currency** support (PEN, USD)

## Challenges Overcome

1. **Payment Reconciliation**: Automatic matching system between webhooks and orders
2. **Idempotency**: Prevention of duplicate charges
3. **Failover**: Automatic gateway switching in case of failure
4. **Compliance**: PCI-DSS regulation compliance

This module is critical to the business, processing 100% of the platform's revenue with high reliability and security.
