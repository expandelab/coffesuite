# Amazónika Café — Landing React

Stack: React 18 · Vite · TypeScript · Tailwind 3 · Framer Motion · Lenis (`@studio-freight/lenis`) · primitivas estilo shadcn/ui (Radix + cva) · Lucide.

## Uso
```
npm install --legacy-peer-deps
npm run dev          # desarrollo
npm run build        # producción en /dist
npm run build:single # un solo HTML en /dist-single (para previsualizar/compartir)
```

## Estructura
- `src/lib/data.ts` — orígenes, cafés, precios (250g/500g), métodos de extracción, número de WhatsApp.
- `src/lib/cart.tsx` — carrito (localStorage `amazonikaCart`) y `checkoutWhatsApp()`.
- `src/sections/` — Hero (parallax + Lenis + empaque 3D), Marquee, TasteSimulator, Products, Traceability.
- `src/components/ui/` — button, badge, tooltip, tabs, slider (patrón shadcn).

Notas: el perfil de acidez/cuerpo/dulzor del simulador es una estimación editorial en `data.ts` (ajústala con tus datos de cata). El mapa es una silueta esquemática, no cartográfica.
