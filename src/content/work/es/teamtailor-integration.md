---
title: Teamtailor ATS Integration
publishDate: 2023-06-15 00:00:00
img: /assets/teamtailor/integration-flow.png
img_alt: Diagrama de flujo mostrando la sincronización entre Teamtailor y Multitest
description: |
  Middleware de integración que conecta el ATS Teamtailor con la plataforma Multitest para sincronización de candidatos y reportes.
tags:
  - Node.js
  - Webhooks
  - API Integration
  - Automation
featured: true
visible: true
---

> [!NOTE]
> Solución de integración que automatiza el flujo de reclutamiento entre plataformas externas y sistemas internos.

## Sobre el Proyecto

Este proyecto es un middleware inteligente diseñado para conectar el ecosistema de **Multitest** con **Teamtailor**, un ATS (Applicant Tracking System) líder en el mercado.

Actúa como un receptor y procesador de eventos en tiempo real, interceptando los webhooks generados por Teamtailor (como "Nuevo Candidato" o "Cambio de Etapa") para desencadenar acciones automáticas en Multitest, como la creación de usuarios o la asignación de evaluaciones.

## Stack Tecnológico

- **Runtime**: **Node.js** para un procesamiento ligero y eficiente de eventos asíncronos.
- **Comunicación**: Arquitectura basada en **Webhooks** y APIs REST.
- **Seguridad**: Validación de payloads y firmas digitales para asegurar la integridad de los datos.

## Características Principales

- **Sincronización Bidireccional**: Mantiene los datos de los candidatos actualizados en ambas plataformas.
- **Visualización de Reportes**: Permite a los reclutadores ver los resultados de las evaluaciones psicométricas de Multitest directamente dentro de la interfaz de Teamtailor.
- **Automatización de Flujos**: Elimina la entrada manual de datos, reduciendo errores y ahorrando tiempo al equipo de RRHH.
- **Procesamiento de Eventos**: Análisis inteligente de payloads JSON para determinar la acción correcta a ejecutar.

## Impacto

Esta integración permitió a los clientes de Multitest utilizar su ATS preferido sin perder la potencia de las evaluaciones psicométricas especializadas, creando una experiencia de usuario fluida y unificada.
