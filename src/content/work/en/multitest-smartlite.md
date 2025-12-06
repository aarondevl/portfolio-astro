--- 
title: SmartLite
publishDate: 2020-03-04 00:00:00
img: /assets/stock-4.jpg
img_alt: SmartLite application dashboard
description: |
  A lightweight version of the SmartPay system, optimized for small businesses.
tags:
  - Angular
  - Optimization
  - SaaS
featured: true
visible: true
---


## Technology Stack

### Backend (NestJS)
- **Architecture**: Modular with separate domains (Auth, Users, Processes, Psychometric Test, Payments).
- **Database**: **MikroORM** with MySQL, supporting multiple schemas and connections per environment.
- **Authentication**: JWT with Passport Strategy and custom Guards.
- **Payments**: Integration with MercadoPago and internal credit system.
- **Emailing**: Transactional email service with **Postmark**.
- **Quality**: Unit and E2E testing, with CI/CD pipelines in Jenkins.

### Frontend (Angular 17)
- **Framework**: Angular 17 using **Signals** for reactive state management.
- **Styling**: Modern and responsive design with **Tailwind CSS**.
- **Architecture**: Reusable components and optimized services.

## Key Features

- **Assessment Management**: Complete administration of psychometric test batteries.
- **Selection Processes**: Configurable workflows for different types of job postings.
- **Credits and Payment System**: Balance and transaction management for platform usage.
- **Multi-environment**: Dynamic configuration for Local, Development, and Production environments.
- **Internationalization**: Multi-language support (i18n) in backend and frontend.

## Infrastructure
- **Backend Cloud**: Scalable serverless deployment on **AWS App Runner**.
- **Frontend Cloud**: Automated hosting and CI/CD with **AWS Amplify**.
- **Docker**: Containerized deployment for consistency across environments.
- **Testing**: Unit and E2E tests integrated into the development cycle.
- **CI/CD**: Automated pipelines for build, testing, and continuous deployment.
- **Monitoring**: Structured logging with Pino and Health Checks.
