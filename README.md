# WAKI web

Landing responsive de WAKI con identidad de marca, acceso a reservas web y afiliación de hoteles.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
```

Copia `.env.example` a `.env` y configura los destinos antes de compilar. Las variables `VITE_` son públicas.

- `VITE_BOOKING_URL`: plataforma existente de reservas (por defecto ventas.wakipe.com).
- `VITE_HOTEL_PORTAL_URL`: portal existente para hoteles.
- `VITE_PARTNERSHIP_EMAIL`: correo comercial receptor. Sin dirección el formulario muestra que la recepción aún no está disponible.

El formulario valida los campos y prepara una solicitud mediante `mailto:`. El usuario debe enviarla desde su aplicación de correo; la página no afirma que fue recibida. Para envío directo sin cliente de correo se necesita un backend con proveedor de email, control de abuso y credenciales privadas. No incluye un backend de reservas: los CTA llevan a la plataforma existente.

Assets originales del cliente optimizados en WebP en `public/brand`. Tipografías Poppins e Inter con fallback del sistema. No se publican hoteles, precios, reseñas ni métricas ficticias.
