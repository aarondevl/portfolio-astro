#!/bin/bash

# Script para tomar screenshots de los proyectos
# Requiere: scrot o gnome-screenshot

ASSETS_DIR="/home/aarondevl/integrador-docker/portfolio/public/assets"

echo "📸 Toma de Screenshots para Portfolio"
echo "======================================"
echo ""
echo "Por favor, abre cada URL en tu navegador y presiona ENTER para tomar el screenshot:"
echo ""

# Función para tomar screenshot
take_screenshot() {
    local url=$1
    local filename=$2

    echo "🌐 Abre: $url"
    echo "   Presiona ENTER cuando esté listo..."
    read

    # Intenta con diferentes herramientas
    if command -v gnome-screenshot &> /dev/null; then
        gnome-screenshot -w -f "$ASSETS_DIR/$filename"
        echo "   ✅ Screenshot guardado: $filename"
    elif command -v scrot &> /dev/null; then
        sleep 2
        scrot -u "$ASSETS_DIR/$filename"
        echo "   ✅ Screenshot guardado: $filename"
    else
        echo "   ❌ No se encontró gnome-screenshot ni scrot"
        echo "   📝 Por favor, toma el screenshot manualmente y guárdalo como: $ASSETS_DIR/$filename"
    fi
    echo ""
}

# Screenshots a tomar
take_screenshot "https://www.smartlite.multitestresources.com" "multitest-dashboard.jpg"
take_screenshot "https://www.smartlite.multitestresources.com/evaluations" "multitest-evaluations.jpg"
take_screenshot "https://n8n.aaronccenta.site" "n8n-workflows.jpg"
take_screenshot "https://backendlite.aaronccenta.site/api" "backend-swagger.jpg"

echo ""
echo "✨ ¡Proceso completado!"
echo ""
echo "📁 Las imágenes están en: $ASSETS_DIR"
echo ""
echo "▶️  Siguiente paso: Ejecuta 'npm run dev' en el portfolio para ver los cambios"
