# Sitemap del Proyecto

## Vista General

```text
/
├─ /index.html
│  ├─ Hero principal
│  ├─ Franja de valores
│  ├─ Sobre mí
│  ├─ Preview de cirugía estética
│  └─ Contacto / CTA WhatsApp
│
├─ /cirugia-estetica.html
│  ├─ Hero de catálogo
│  ├─ Navegación por categorías
│  ├─ Cirugía Corporal
│  │  ├─ Mamoplastía o Aumento de Senos
│  │  ├─ Liposucción
│  │  └─ Abdominoplastia
│  ├─ Cirugía Facial
│  │  ├─ Rinoplastia
│  │  ├─ Rejuvenecimiento Facial
│  │  └─ Bichectomía
│  ├─ Cirugía Mamaria
│  │  └─ Reducción Mamaria
│  └─ Cirugía Reconstructiva
│     └─ Cirugía Post Bariátrica
│
└─ /procedimiento.html?slug={procedimiento}
   ├─ Hero del procedimiento
   ├─ Galería del procedimiento
   ├─ Información del procedimiento
   ├─ Contacto / CTA WhatsApp
   ├─ Beneficios
   ├─ Candidatos ideales
   ├─ Recuperación
   └─ Preguntas frecuentes
```

## Mapa de Navegación

```text
Menú principal
├─ Inicio -> /index.html#inicio
├─ Sobre mí -> /index.html#sobre-mi
├─ Galería -> /cirugia-estetica.html
└─ Contáctame -> /index.html#contacto
```

## Procedimientos Actuales

```text
/procedimiento.html?slug=mamoplastia-aumento-senos
/procedimiento.html?slug=liposuccion
/procedimiento.html?slug=abdominoplastia
/procedimiento.html?slug=rinoplastia
/procedimiento.html?slug=rejuvenecimiento-facial
/procedimiento.html?slug=bichectomia
/procedimiento.html?slug=reduccion-mamaria
/procedimiento.html?slug=cirugia-post-bariatrica
```

## Arquitectura Relacionada

```text
index.html
└─ app/index.js
   └─ usa procedureRepository de app/data.js

cirugia-estetica.html
└─ app/catalog.js
   └─ usa procedureRepository de app/data.js

procedimiento.html
└─ app/procedure.js
   └─ usa procedureRepository de app/data.js
```
