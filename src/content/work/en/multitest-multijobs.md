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
- **Security**: Dual JWT authentication (Candidates and Companies) with Passport strategies.
- **Documentation**: Fully documented API with Swagger/OpenAPI.
- **Validation**: Robust validation pipelines with `class-validator`.
- **Patterns**: Use of DTOs, Serializers, and Repository pattern for clean and maintainable code.

### Frontend (Angular 20)
Modern monorepo using the latest **Angular 20** features.
- **Architecture**: Multi-application workspace (`company-app` and `candidate-app`).
- **State**: Reactive state management using **Angular Signals**.
- **UI/UX**: Responsive design with **Tailwind CSS** and Flowbite components.
- **Security**: Authentication guards and two-step verification (2FA).
- **Integration**: Auto-generated API client from OpenAPI specification.

## Key Features

### For Companies
- **Vacancy Management**: Complete creation and editing of job postings with detailed requirements.
- **Talent Pipeline**: Visualization and management of candidates at different process stages.
- **Company Profiles**: Corporate information management and team user administration.
- **Roles and Permissions**: Granular access control system for different corporate user levels.

### For Candidates
- **CV Wizard**: Interactive and exportable resume builder.
- **Multimedia**: Upload CVs, profile photos, and presentation videos stored in **AWS S3**.
- **Smart Search**: Advanced job filtering by location, area, and modality.
- **Advanced Security**: Two-factor authentication (2FA) to protect accounts.

## Infrastructure and DevOps
- **Cloud Storage**: Integration with **AWS S3** for secure and scalable multimedia file management (images, documents, videos).
- **IaC (Infrastructure as Code)**: Automated deployment using **Pulumi**.
- **Deployment**: Serverless and containerized architecture using **AWS App Runner** (Backend) and **AWS Amplify** (Frontend).
- **Docker**: Complete containerization for consistent development and deployment.
- **Software Quality**:
    - **Unit Testing**: Comprehensive tests with Karma/Jasmine.
    - **E2E Testing**: Critical flows validated with Cypress.
    - **CI/CD**: Automated pipelines for build and verification.
