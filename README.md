# Calendario Familiar (Alejandro, Alba, Alicia y Noah)

Aplicación web progresiva (PWA) de calendario semanal familiar con **navegación semanal con tope en lunes y domingo en móvil (y cambio de semana con un segundo arrastre)**, **dictado por voz inteligente en español**, **base de datos integrada en Netlify (Netlify Blobs)**, notificaciones push opcionales mediante **OneSignal** y despliegue automático desde **GitHub**.

## Estructura de archivos
- `index.html`: Aplicación completa (navegación móvil con tope lunes/domingo, dictado por voz mejorado, calendario escolar 2026–2027, extraescolares, logística, recordatorios y sincronización automática).
- `netlify/functions/events.mjs`: Función serverless de Netlify que guarda y sincroniza los eventos de toda la familia en **Netlify Blobs**.
- `package.json`: Dependencia `@netlify/blobs` que Netlify instala automáticamente al desplegar.
- `netlify.toml`: Configuración de funciones y caché para Netlify.
- `manifest.json` e `icon.svg`: Configuración para instalar la web como app nativa en iPhone y Android.
- `sw.js`: Service Worker para soporte offline y notificaciones locales.
- `OneSignalSDKWorker.js`: Worker oficial necesario para notificaciones Push de OneSignal.
