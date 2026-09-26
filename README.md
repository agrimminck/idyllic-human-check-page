# idyllic-human-check-page

Página estática con reCAPTCHA v2. Recibe `?captchaId=<uuid>` y envía `{token, captchaId}` a `POST {apiBaseUrl}/auth/verify-human-check` (idyllic-launcher-backend).

## Configuración
Edita `config.js` y pon en `apiBaseUrl` la URL pública (https) del launcher backend, sin `/` final. La site key de reCAPTCHA es pública y está en `index.html`.

## Probar en local
    python -m http.server 8000   # o: npx serve
    http://localhost:8000/?captchaId=<uuid>&api=http://localhost:4008

El parámetro `?api=` solo se acepta si el host es `localhost` o `127.0.0.1`; cualquier otro valor se ignora (así un enlace malicioso no puede redirigir el token a otro servidor).

Test de la lógica: `node logic.test.js`

## Servir
Cualquier hosting estático (GitHub Pages o el mismo servidor del backend). Sirve `index.html`, `config.js` y `logic.js` juntos. El backend debe permitir CORS desde el origen donde se sirva la página.
