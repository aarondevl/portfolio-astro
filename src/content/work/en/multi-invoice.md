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
- **Integración**: Cliente HTTP resiliente para comunicación con API de Nubefact.
- **Documentación**: API documentada con **Swagger/OpenAPI**.
- **Internacionalización**: Soporte multi-idioma (ES, EN, PT) con `nestjs-i18n`.

## Características Principales

- **Emisión Automatizada**: Generación de Boletas y Facturas en tiempo real tras el pago.
- **Integración Nubefact**: Conexión directa con el proveedor de servicios electrónicos (PSE).
- **Cumplimiento SUNAT**: Validación de reglas de negocio y formatos requeridos por la autoridad tributaria.
- **Gestión de Correlativos**: Control automático de series y números de comprobantes.
- **Notificaciones**: Envío automático de comprobantes (PDF/XML) al cliente vía correo electrónico.

## Infraestructura
- **Docker**: Entorno contenerizado para despliegue consistente.
- **Logging**: Sistema de trazas con Pino para auditoría de emisiones.
- **Seguridad**: Autenticación JWT para proteger los endpoints de emisión.
