# Calendario Familiar (Alejandro, Alba, Alicia y Noah)

Aplicación web progresiva (PWA) de calendario semanal familiar con **base de datos integrada en Netlify (Netlify Blobs)**, notificaciones push opcionales mediante **OneSignal** y despliegue automático desde **GitHub**.

## Estructura de archivos
- `index.html`: Aplicación completa (interfaz, dictado por voz, calendario escolar 2026–2027, extraescolares, logística, recordatorios y sincronización automática).
- `netlify/functions/events.mjs`: Función serverless de Netlify que guarda y sincroniza los eventos de toda la familia en **Netlify Blobs** sin cuentas ni bases de datos externas.
- `package.json`: Dependencia `@netlify/blobs` que Netlify instala automáticamente al desplegar.
- `netlify.toml`: Configuración de funciones y caché para Netlify.
- `manifest.json` e `icon.svg`: Configuración para instalar la web como app nativa en iPhone y Android.
- `sw.js`: Service Worker para soporte offline y notificaciones locales.
- `OneSignalSDKWorker.js`: Worker oficial necesario para notificaciones Push de OneSignal.

---

## Puesta en marcha (GitHub + Netlify)
1. Sube todos los archivos y carpetas de este ZIP a la raíz de tu repositorio en **GitHub** (asegúrate de que la carpeta `netlify/functions/events.mjs` mantenga su ruta).
2. En **Netlify**, pulsa **Trigger deploy** (o espera unos segundos a que se despliegue automáticamente al detectar el cambio en GitHub).
3. ¡Listo! Abre la URL de tu web en tu móvil y en el de Alba: ambos quedaréis sincronizados automáticamente sin configurar claves ni SQL.
