---
title: n8n Workflow Automation
publishDate: 2023-02-10 00:00:00
img: /assets/n8n-workflows.jpg
img_alt: n8n panel showing automated workflows connected to NestJS backend
description: |
  Enterprise automation with n8n integrated into NestJS backend for automatic processing of evaluations and notifications.
tags:
  - n8n
  - Automation
  - Integration
  - Workflows
featured: false
visible: false
---

## About the Project

Enterprise automation system using n8n connected directly to the NestJS backend via REST API. Automates critical business processes such as evaluation processing, notification sending, and synchronization with external systems.

## Tech Stack

- **n8n** - Workflow automation platform
- **NestJS API** - Backend for business logic execution
- **MySQL** - Database shared with backend
- **Docker** - Containerization and networking
- **Webhooks** - External triggers

## Architecture

### Backend Integration

```yaml
n8n Container:
  IP: 172.27.0.32:5678
  Networking: Private Docker Network

Configured Environment Variables:
  - BACKEND_BASE_URL: http://172.27.0.26:9592/api/v1
  - MYSQL_HOST: 172.27.0.24
  - ENV: local|development|production

Authentication:
  - Basic Auth enabled
  - Credentials in environment variables
```

### Main Workflows

**1. Evaluation Processing**
```
Trigger: Frontend Webhook
↓
Validate candidate data
↓
Call API: POST /api/v1/psychometric-test/start
↓
Send welcome email (Postmark)
↓
Register in MySQL
↓
Notification to administrators
```

**2. Credit Management**
```
Trigger: Cron job (daily)
↓
Query API: GET /api/v1/credits/low-balance
↓
Filter clients with <10 credits
↓
Send email alerts
↓
Create in-app notification
↓
Log in database
```

**3. Synchronization with Legacy Systems**
```
Trigger: Payment confirmed Webhook
↓
Get data: GET /api/v1/payments/{id}
↓
Transform format
↓
HTTP Request to SmartPay API
↓
Update status: PATCH /api/v1/payments/{id}
↓
Send invoice via email
```

**4. Automatic Reports**
```
Trigger: Cron (end of month)
↓
MySQL Query: Period metrics
↓
Process data with JavaScript
↓
Generate PDF report
↓
Send to stakeholders
↓
Archive in storage
```

## Most Used Nodes

### HTTP Request
Connection with NestJS backend:
```javascript
Method: POST/GET/PATCH
URL: {{ $env.BACKEND_BASE_URL }}/endpoint
Authentication: Bearer Token
Headers: Content-Type: application/json
```

### MySQL
Direct database queries:
```sql
-- Get pending evaluations
SELECT * FROM psychometric_test
WHERE status = 'pending'
AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR);
```

### Email (Postmark)
Transactional email sending:
- Payment confirmations
- Evaluation results
- Administrative alerts
- Periodic reports

### Webhook
Reception of external events:
- Payment confirmation
- Frontend events
- Legacy system triggers
- Third-party notifications

## Environment Variables

Dynamic configuration per environment:

```bash
# Workflow Environment
N8N_WORKFLOW_ENV=local|development|production

# Backend URLs
BACKEND_BASE_URL=http://172.27.0.26:9592/api/v1

# MySQL Access
MYSQL_HOST=172.27.0.24
MYSQL_DATABASE=my_database
MYSQL_USER=root
MYSQL_PASSWORD=***
```

## Business Workflows

### Client Onboarding
1. Client registers in frontend
2. Webhook triggers n8n workflow
3. Create user in backend (API call)
4. Send welcome email
5. Assign promotional credits
6. Notify sales team

### Evaluation Processing
1. Candidate completes test
2. Webhook with results
3. Calculate score (logic in backend)
4. Deduct client credit
5. Generate results PDF
6. Send to client HR
7. Update dashboard in real-time

### System Monitoring
1. Cron job every hour
2. Service health check
3. Metrics query in MySQL
4. Anomaly detection
5. Alerts if problems
6. Log for audit

## Advantages of n8n

### Low-Code Automation
- Visual workflow builder
- No need to deploy code
- Hot changes
- Integrated testing

### Flexibility
- Code nodes with JavaScript
- Unlimited HTTP requests
- Direct connection to MySQL
- Integration with 200+ apps

### Observability
- Detailed execution logs
- Complete history
- Visual error handling
- Automatic retry

## Security

- **Encrypted credentials** in n8n
- **Environment variables** for secrets
- **Private Docker network** without exposure
- **Basic Auth** enabled
- **HTTPS** via Cloudflare Tunnel

## Deployment

### Docker Compose
```yaml
n8n:
  image: n8nio/n8n:latest
  ports:
    - "5678:5678"
  environment:
    - N8N_BASIC_AUTH_ACTIVE=true
    - ENV=${N8N_WORKFLOW_ENV}
    - BACKEND_BASE_URL=${N8N_BACKEND_BASE_URL}
  volumes:
    - n8n_data:/home/node/.n8n
  networks:
    - my_network
```

### Public Access
```
https://n8n.aaronccenta.site
↓
Cloudflare Tunnel
↓
n8n:5678 (Docker)
```

## Results

- ✅ **20+ workflows** active in production
- ✅ **Thousands of executions** monthly
- ✅ **99% success rate** in automations
- ✅ **Savings of 10+ hours/week** in manual tasks
- ✅ **Zero code deployments** for new workflows
- ✅ **Perfect integration** with NestJS backend

## Use Cases

1. **Mass sending of evaluations** scheduled
2. **Automatic synchronization** with CRM
3. **Custom reports** for clients
4. **Automatic backup** of critical data
5. **Proactive monitoring and alerts**
6. **Data migration** between systems

This automation system has transformed manual operations into reliable automatic processes, allowing the team to focus on high-value tasks.
