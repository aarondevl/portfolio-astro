---
title: Multijobs Platform
publishDate: 2025-12-05 00:00:00
img: /assets/multijobs/frontpage.png
img_alt: Multijobs Dashboard showing candidate and vacancy management
description: |
  A comprehensive recruitment and selection platform that connects companies with candidates through a modern, secure, and scalable system.
tags:
  - Angular
  - NestJS
  - TypeScript
  - Docker
  - MySQL
  - Tailwind
featured: true
visible: true
---

> [!NOTE]
> Active project in continuous development, implementing the latest web development technologies.

## About the Project

**Multijobs** is a next-generation recruitment platform designed to optimize the connection between companies and talent. It functions as a unified workspace where companies can manage the entire hiring lifecycle, from posting vacancies to final selection, while candidates enjoy a smooth and professional application experience.

The system stands out for its robust architecture that supports multiple applications (Companies and Candidates) operating on a centralized and secure backend.

## Tech Stack

### Backend (NestJS)
- **Seguridad**: Autenticación JWT dual (Candidatos y Empresas) con Passport strategies.
- **Documentación**: API completamente documentada con Swagger/OpenAPI.
- **Validación**: Pipelines de validación robustos con `class-validator`.
- **Patrones**: Uso de DTOs, Serializers y el patrón Repository para un código limpio y mantenible.

### Frontend (Angular 20)
Monorepo moderno utilizando las últimas características de **Angular 20**.
- **Arquitectura**: Workspace multi-aplicación (`company-app` y `candidate-app`).
- **Estado**: Gestión de estado reactiva utilizando **Angular Signals**.
- **UI/UX**: Diseño responsive con **Tailwind CSS** y componentes Flowbite.
- **Seguridad**: Guards de autenticación y verificación de dos pasos (2FA).
- **Integración**: Cliente API auto-generado desde especificación OpenAPI.

## Características Principales

### Para Empresas
- **Gestión de Vacantes**: Creación y edición completa de ofertas de trabajo con requisitos detallados.
- **Pipeline de Talento**: Visualización y gestión de candidatos en diferentes etapas del proceso.
- **Perfiles de Empresa**: Administración de información corporativa y gestión de usuarios del equipo.
- **Roles y Permisos**: Sistema granular de control de acceso para diferentes niveles de usuarios corporativos.

### Para Candidatos
- **CV Wizard**: Constructor de currículum interactivo y exportable.
- **Multimedia**: Carga de CVs, fotos de perfil y videos de presentación almacenados en **AWS S3**.
- **Búsqueda Inteligente**: Filtrado avanzado de ofertas por ubicación, área y modalidad.
- **Seguridad Avanzada**: Autenticación de dos factores (2FA) para proteger la cuenta.

## Infraestructura y DevOps
- **Cloud Storage**: Integración con **AWS S3** para gestión segura y escalable de archivos multimedia (imágenes, documentos, videos).
- **IaC (Infraestructura como Código)**: Despliegue automatizado utilizando **Pulumi**.
- **Despliegue**: Arquitectura serverless y contenerizada usando **AWS App Runner** (Backend) y **AWS Amplify** (Frontend).
- **Docker**: Contenerización completa para desarrollo y despliegue consistente.
- **Calidad de Software**:
    - **Unit Testing**: Pruebas exhaustivas con Karma/Jasmine.
    - **E2E Testing**: Flujos críticos validados con Cypress.
    - **CI/CD**: Pipelines automatizados para construcción y verificación.
