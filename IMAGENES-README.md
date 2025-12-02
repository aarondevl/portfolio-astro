# 📸 Guía para Agregar Imágenes al Portfolio

## Imágenes Necesarias

He configurado el portfolio para usar las siguientes imágenes de tus proyectos reales:

### 1. **multitest-dashboard.jpg**
- **URL**: https://www.smartlite.multitestresources.com
- **Qué capturar**: Dashboard principal o página de inicio
- **Usado en**: Proyecto "Multitest Job Board Platform"

### 2. **multitest-evaluations.jpg** (Opcional)
- **URL**: https://www.smartlite.multitestresources.com/evaluations
- **Qué capturar**: Sistema de evaluaciones psicométricas
- **Usado en**: Sección adicional del proyecto Multitest

### 3. **n8n-workflows.jpg**
- **URL**: https://n8n.aaronccenta.site
- **Qué capturar**: Panel de n8n mostrando workflows activos
- **Usado en**: Proyecto "n8n Workflow Automation"

### 4. **backend-swagger.jpg**
- **URL**: https://backendlite.aaronccenta.site/api
- **Qué capturar**: Documentación Swagger del API
- **Usado en**: Proyecto "Payment Gateway Integration"

### 5. **docker-infrastructure.jpg**
- **Qué capturar**:
  - Opción A: Ejecuta `docker compose ps` y toma screenshot de la terminal
  - Opción B: Docker Desktop mostrando los contenedores corriendo
  - Opción C: Diagrama de arquitectura si tienes uno
- **Usado en**: Proyecto "Docker & Cloud Infrastructure"

---

## Métodos para Tomar Screenshots

### Método 1: Script Automático (Recomendado)

```bash
cd /home/aarondevl/integrador-docker/portfolio
./take-screenshots.sh
```

El script te guiará paso a paso.

### Método 2: Manual con Herramientas del Sistema

#### En Ubuntu/Linux:

```bash
# Opción 1: gnome-screenshot (captura ventana activa)
gnome-screenshot -w -f /home/aarondevl/integrador-docker/portfolio/public/assets/multitest-dashboard.jpg

# Opción 2: scrot (captura ventana activa)
scrot -u /home/aarondevl/integrador-docker/portfolio/public/assets/multitest-dashboard.jpg

# Opción 3: Atajo de teclado
# Presiona PrtScn o Alt+PrtScn y guarda manualmente
```

### Método 3: Desde el Navegador

1. Abre la URL en tu navegador
2. Presiona `F12` para abrir DevTools
3. Presiona `Ctrl+Shift+P` (o Cmd+Shift+P en Mac)
4. Escribe "screenshot" y selecciona "Capture full size screenshot"
5. Guarda la imagen con el nombre correspondiente en `/home/aarondevl/integrador-docker/portfolio/public/assets/`

---

## Guardar las Imágenes

Todas las imágenes deben ir en:
```
/home/aarondevl/integrador-docker/portfolio/public/assets/
```

### Formato y Tamaño Recomendado

- **Formato**: JPG (para mejor compresión) o PNG (para mejor calidad)
- **Ancho recomendado**: 1200-1600px
- **Relación de aspecto**: 16:9 o similar
- **Peso máximo**: 500KB por imagen (optimiza si es necesario)

---

## Optimizar Imágenes (Opcional)

Si las imágenes son muy pesadas, puedes optimizarlas:

```bash
# Instalar ImageMagick si no lo tienes
sudo apt install imagemagick

# Redimensionar y optimizar
cd /home/aarondevl/integrador-docker/portfolio/public/assets/
convert multitest-dashboard.jpg -resize 1600x -quality 85 multitest-dashboard.jpg
```

---

## Verificar que Funcionan

1. Después de guardar las imágenes, el portfolio se recargará automáticamente (hot reload)
2. Visita http://localhost:25001 o https://aaronccenta.site
3. Ve a la sección "Proyectos" y verifica que las imágenes se muestren correctamente

---

## Imágenes de Respaldo

Si por alguna razón no puedes tomar screenshots de smartlite.multitestresources.com, las imágenes stock actuales (`stock-1.jpg`, etc.) seguirán funcionando. Pero te recomiendo usar imágenes reales de tus proyectos para que el portfolio sea más auténtico.

---

## Troubleshooting

**Problema**: "Las imágenes no se ven"
- **Solución**: Verifica que los nombres de archivo coincidan exactamente (sensible a mayúsculas/minúsculas)

**Problema**: "La imagen es muy pesada"
- **Solución**: Usa el comando de ImageMagick arriba para optimizarla

**Problema**: "No puedo acceder a smartlite.multitestresources.com"
- **Solución**: Usa imágenes de tu ambiente local o mantén las imágenes stock temporalmente

---

¿Necesitas ayuda? Solo dime qué método quieres usar y te guío paso a paso.
