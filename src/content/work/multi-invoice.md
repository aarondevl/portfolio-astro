---
title: Multi-Invoice Service
publishDate: 2025-09-01 00:00:00
img: /assets/multi-invoice/architecture-flow.png
img_alt: Diagrama de arquitectura mostrando la integración entre SmartLite, el Microservicio y Nubefact
description: |
  Sistema de gestión de facturación electrónica integrado con Nubefact y SUNAT para la emisión automatizada de comprobantes.
tags:
  - NestJS
  - Nubefact
  - SUNAT
  - MySQL
  - Swagger
featured: true
visible: true
---

> [!NOTE]
> Servicio crítico que asegura el cumplimiento tributario mediante la emisión de comprobantes electrónicos válidos.

## Sobre el Proyecto

**Multi-Invoice** es un sistema especializado en la gestión y emisión de comprobantes de pago electrónicos (Facturas y Boletas). Funciona como un intermediario robusto entre las aplicaciones comerciales de Multitest y los servicios de facturación de **Nubefact**, asegurando que cada transacción sea reportada correctamente a la **SUNAT**.

Este servicio automatiza la complejidad fiscal, validando datos, calculando impuestos y gestionando la respuesta de los entes reguladores.

## Stack Tecnológico

### Backend (NestJS)
- **Framework**: NestJS con TypeScript para lógica de negocio estructurada.
- **Base de Datos**: **MikroORM** con MySQL para almacenamiento de comprobantes y correlativos.
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
