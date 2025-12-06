---
title: Multi-Invoice Service
publishDate: 2020-03-02 00:00:00
img: /assets/stock-3.jpg
img_alt: Architecture diagram of the multi-invoice service
description: |
  Microservice for massive electronic invoicing generation using NestJS and Nubefact.
tags:
  - NestJS
  - Microservices
  - Electronic Invoicing
featured: true
visible: true
---

## About the Project

This project consisted of developing a microservice responsible for the massive generation of electronic invoices. The system integrates with the **Nubefact** provider to comply with SUNAT (Peruvian Tax Authority) regulations.

### Key Features

- **Massive Generation**: Capability to process large volumes of invoices efficiently.
- **Nubefact Integration**: Direct connection with the electronic invoicing provider.
- **Scalable Architecture**: Designed as a microservice to facilitate scalability and maintenance.

### Technologies Used

- **NestJS**: Framework for the backend.
- **TypeScript**: Main language.
- **Nubefact API**: For electronic invoicing.

> This service is critical for business operations, ensuring compliance with tax obligations efficiently and reliably.

## Technology Stack

### Backend (NestJS)
- **Integration**: Resilient HTTP client for communication with Nubefact API.
- **Documentation**: API documented with **Swagger/OpenAPI**.
- **Internationalization**: Multi-language support (ES, EN, PT) with `nestjs-i18n`.

## Key Features

- **Automated Issuance**: Real-time generation of Receipts and Invoices after payment.
- **Nubefact Integration**: Direct connection with the electronic service provider (PSE).
- **SUNAT Compliance**: Validation of business rules and formats required by the tax authority.
- **Sequential Management**: Automatic control of series and document numbers.
- **Notifications**: Automatic sending of documents (PDF/XML) to customers via email.

## Infrastructure
- **Docker**: Containerized environment for consistent deployment.
- **Logging**: Trace system with Pino for issuance auditing.
- **Security**: JWT authentication to protect issuance endpoints.
