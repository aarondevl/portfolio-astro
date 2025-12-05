---
title: SmartLite
publishDate: 2025-11-01 00:00:00
img: /assets/smartlite/dashboard.png
img_alt: Dashboard de SmartEvaluation Lite mostrando gestión de evaluaciones
description: |
  Sistema integral para la gestión de evaluaciones psicométricas, procesos de selección y pagos, utilizado en producción.
tags:
  - NestJS
  - Angular
  - MikroORM
  - AWS
  - CI/CD
featured: true
visible: true
---

> Proyecto en producción, gestionando procesos reales de selección y evaluaciones psicométricas.
> [Ver sitio en vivo](https://www.smartlite.multitestresources.com/login?redirect=%2Fhome)

## Sobre el Proyecto

**SmartEvaluation Lite** es una aplicación robusta diseñada para gestionar el ciclo completo de evaluaciones psicométricas. Permite a las empresas administrar candidatos, procesos de selección, pagos y créditos, integrándose con servicios externos como MercadoPago y Culqi.

El sistema está construido con una arquitectura modular en NestJS para el backend y Angular 17 para el frontend, garantizando escalabilidad y mantenibilidad.

## Stack Tecnológico

### Backend (NestJS)
- **Arquitectura**: Modular con dominios separados (Auth, Users, Processes, Psychometric Test, Payments).
- **Base de Datos**: **MikroORM** con MySQL, soportando múltiples esquemas y conexiones por ambiente.
- **Autenticación**: JWT con Passport Strategy y Guards personalizados.
- **Pagos**: Integración con MercadoPago y sistema de créditos interno.
- **Emailing**: Servicio de correos transaccionales con **Postmark**.
- **Calidad**: Testing unitario y E2E, con pipelines de CI/CD en Jenkins.

### Frontend (Angular 17)
- **Framework**: Angular 17 utilizando **Signals** para gestión de estado reactiva.
- **Estilos**: Diseño moderno y responsive con **Tailwind CSS**.
- **Arquitectura**: Componentes reutilizables y servicios optimizados.

## Características Principales

- **Gestión de Evaluaciones**: Administración completa de baterías de pruebas psicométricas.
- **Procesos de Selección**: Flujos de trabajo configurables para diferentes tipos de convocatorias.
- **Sistema de Créditos y Pagos**: Manejo de saldo y transacciones para el uso de la plataforma.
- **Multi-ambiente**: Configuración dinámica para entornos Local, Desarrollo y Producción.
- **Internacionalización**: Soporte multi-idioma (i18n) en backend y frontend.

## Infraestructura
- **Backend Cloud**: Despliegue serverless escalable en **AWS App Runner**.
- **Frontend Cloud**: Hosting y CI/CD automatizado con **AWS Amplify**.
- **Docker**: Despliegue contenerizado para consistencia entre entornos.
- **Testing**: Pruebas unitarias y E2E integradas en el ciclo de desarrollo.
- **CI/CD**: Pipelines automatizados para construcción, pruebas y despliegue continuo.
- **Monitoreo**: Logging estructurado con Pino y chequeos de salud (Health Checks).
