# Academia Puma — Sitio web

Sitio de una sola página para Academia Puma (cursos de libreta de conducir
para motos, categorías G2 y G3 en Montevideo), más el simulador de examen
teórico como página aparte.

## Estructura

```
academia-puma/
├── index.html          → Página principal del sitio
├── simulacro-puma.html  → Simulador de examen teórico (independiente)
├── css/
│   └── styles.css      → Estilos (paleta dorado/negro, tipografía Oswald + Inter)
├── js/
│   └── script.js        → Selector G2/G3, acordeón de preguntas, botón "volver arriba"
└── images/
    ├── logo-puma.svg              → Isotipo usado en el encabezado
    ├── favicon.svg                → Ícono de pestaña del navegador
    ├── pare.svg                   → Señal PARE (usada en el simulacro)
    ├── ceda-el-paso.svg           → Señal CEDA EL PASO
    ├── no-estacionar.svg          → Señal de no estacionar
    ├── curva-derecha.svg          → Señal preventiva de curva a la derecha
    ├── curva-peligrosa-izquierda.svg → Señal preventiva de curva peligrosa
    ├── cruce-peatonal.svg         → Señal de cruce peatonal
    ├── doble-mano.svg             → Señal informativa de doble mano
    └── hospital.svg                → Señal informativa de hospital
```

Las señales son ilustraciones propias en SVG (liviano y se ve nítido en cualquier
pantalla), pensadas para representar el tipo de señal sin depender de fotos de
terceros. Si preferís usar las fotos oficiales de la IMM o del manual del
conductor, simplemente reemplazá estos archivos manteniendo el mismo nombre.

## Correcciones aplicadas respecto a la versión anterior

1. **Tarjetas G2 / G3**: se sacó el texto suelto sobre edades y se dejaron los
   requisitos claros dentro de cada tarjeta (G2: mayores de 18 años · G3: 3
   años de antigüedad en G2 y 21 años cumplidos).
2. **Curso Profesional (G3)**: se mantiene el ítem "Si ya tenés otra
   categoría, exoneramos el teórico" tal cual estaba.
3. **Pregunta frecuente "¿Cuál es la diferencia entre G2 y G3?"**: se
   actualizó la respuesta con el texto corregido.

## Cómo publicarlo

### Opción A — GitHub Pages
1. Creá un repositorio nuevo en GitHub y subí el contenido de esta carpeta.
2. Andá a **Settings → Pages**, elegí la rama `main` y la carpeta `/root`.
3. En unos minutos el sitio queda publicado en
   `https://tu-usuario.github.io/tu-repositorio/`.

### Opción B — Dominio propio
Si vas a usar un dominio propio, subí estos mismos archivos al hosting
(vía FTP, cPanel, Netlify, Vercel, etc.) manteniendo la misma estructura de
carpetas (`css/`, `js/`) para que los estilos y el script sigan funcionando.

## Cosas para completar antes de publicar

- Reemplazar el número de WhatsApp de ejemplo en `index.html`
  (`https://wa.me/598000000000`) por el número real de Academia Puma.
- Revisar los precios de ejemplo ($3.500 / $4.500) y los textos de "Valores
  adicionales" y de las preguntas frecuentes que no venían en las capturas
  originales — están escritos de forma genérica y conviene ajustarlos con
  la información real de la academia.
- Si tenés un logo/isotipo propio, reemplazar el ícono SVG genérico del
  encabezado por el archivo real (por ejemplo `img/logo.svg`).
