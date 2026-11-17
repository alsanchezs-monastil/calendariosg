# Calendario Familiar (Alejandro, Alba, Alicia y Noah)

Aplicación web progresiva (PWA) de calendario semanal familiar con sincronización en tiempo real mediante **Supabase**, notificaciones push mediante **OneSignal** y despliegue continuo en **Netlify**.

## Archivos incluidos en este repositorio
- `index.html`: Aplicación completa (interfaz, reconocimiento de voz, calendario escolar 2026–2027, extraescolares, recordatorios y sincronización).
- `netlify.toml`: Configuración de caché para Netlify.
- `manifest.json` e `icon.svg`: Configuración para instalar la web como app nativa en iPhone y Android.
- `sw.js`: Service Worker para soporte offline y notificaciones locales.
- `OneSignalSDKWorker.js`: Worker oficial necesario para notificaciones Push de OneSignal.
- `supabase_setup.sql`: Script SQL para crear la tabla sincronizada en Supabase.

---

## Paso 1: Subir a GitHub y publicar en Netlify
1. Sube todos los archivos de esta carpeta a la raíz de tu repositorio en **GitHub**.
2. Entra en **Netlify**, selecciona tu repositorio de GitHub y haz clic en **Deploy site** (no necesita comando de build; el directorio de publicación es `.`).
3. Copia la URL pública que te asigna Netlify (por ejemplo: `https://calendario-familia.netlify.app`).

---

## Paso 2: Configurar sincronización en tiempo real con Supabase
1. Crea un proyecto gratuito en [supabase.com](https://supabase.com).
2. Ve a **SQL Editor** → **New query**, pega el contenido de `supabase_setup.sql` y pulsa **Run**.
3. Ve a **Project Settings (icono engranaje) → API** y copia:
   - **Project URL** (`https://xxxxx.supabase.co`)
   - **anon public key** (`eyJ...`)
4. Abre tu calendario publicado en Netlify, pulsa el botón **Sincronizar** en la barra superior, pega ambos datos y pulsa **Guardar y Conectar**.
5. Pulsa **Copiar enlace para Alba** y envíaselo por WhatsApp. Al abrir ese enlace en su móvil, su calendario quedará conectado automáticamente al mismo espacio familiar.

---

## Paso 3: Activar Notificaciones Push reales con OneSignal
1. Crea una cuenta gratuita en [onesignal.com](https://onesignal.com) y pulsa **New App/Website** → elige **Web**.
2. Introduce el nombre de la app y la URL exacta de Netlify (`https://tu-web.netlify.app`).
3. Copia el **OneSignal App ID** (y opcionalmente la **REST API Key** en *Settings → Keys & IDs* para programar avisos automáticos con antelación).
4. Pégalos en el panel **Sincronizar / Push** del calendario y pulsa **Activar Push en este móvil** tanto en tu teléfono como en el de Alba.
5. En iPhone (iOS 16.4+), recuerda pulsar primero en Safari **Compartir → Añadir a pantalla de inicio** y abrir la app desde el icono instalado para permitir notificaciones Push.
