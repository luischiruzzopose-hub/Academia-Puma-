# Academia Puma — Sitio web

Sitio de una sola página para Academia Puma (Parque Batlle, Montevideo), con
fotos reales de alumnos, logo real y el simulador de examen teórico como
página aparte.

## Estructura

```
academia-puma/
├── index.html                  → Página principal
├── simulacro-puma.html         → Simulador de examen teórico
├── css/styles.css
├── js/script.js
└── images/
    ├── logo-puma-real.jpeg     → Logo real de Academia Puma
    ├── alumnos/                → Fotos de alumnos aprobados (galería)
    ├── pare.jpg, ceda-el-paso.webp, no-estacionar.jpg,
    │   doble-mano.jpg, curva-derecha.jpg, cruce-peatonal.jpg → señales reales
    └── curva-peligrosa-izquierda.svg, hospital.svg → señales propias (faltan las reales)
```

## Correcciones aplicadas en esta versión

- Foto principal sin paraguas (se usa una foto real de un alumno).
- Nuevo lema principal y nueva sección "Por qué elegirnos" (reemplaza los
  textos anteriores, sin las frases "página acartonada" ni "no te tratamos
  como un número").
- "Libreta Particular" pasó a llamarse "Libreta Amateur" (G2), junto a
  "Libreta Profesional" (G3), con los cc aclarados en cada tarjeta.
- Sección nueva de horarios flexibles (lunes a sábado, sin domingos).
- Aviso de que hay que estar habilitado por la Intendencia antes de anotarse.
- Info de multas y de faltar a un examen agendado actualizada.
- Pago del curso aclarado como "por adelantado".
- SEO del título cambiado a "Academia Puma | Montevideo | Parque Batlle".
- Nueva sección de galería con fotos reales de alumnos que ya sacaron su
  libreta.

## Ojo antes de publicar

Estos textos los escribí yo con lo que me diste en la lista de correcciones,
porque no tuve el texto exacto original. Convendría que los repases:
- El lema principal y el texto de "Por qué elegirnos".
- Los textos de horarios, pago por adelantado y habilitación previa.
- El número de WhatsApp (`598000000000`) es de ejemplo.

## Cómo publicarlo

1. Subí el contenido de esta carpeta a un repositorio de GitHub.
2. Activá GitHub Pages (Settings → Pages → rama `main` → carpeta `/root`), o
   subí los mismos archivos a tu hosting/dominio manteniendo la estructura
   de carpetas (`css/`, `js/`, `images/`).
