# Wireframes del Proyecto

## 1. Landing Page

Archivo: `index.html`

```text
+----------------------------------------------------------------------------------+
| HEADER                                                                           |
| [Logo]                         [Inicio] [Sobre mí] [Galería] [Contáctame]        |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| HERO                                                                             |
| [Eyebrow]                                                                        |
| Título principal grande                     [Imagen hero del doctor]             |
| Texto de apoyo                              [Tarjeta flotante con teléfono]      |
| [CTA WhatsApp] [CTA Ver cirugía estética]                                         |
| Lista de beneficios                                                                |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| FRANJA DE VALORES                                                                 |
| [Experiencia premium] [Catálogo separado] [Escalable]                            |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| SOBRE MÍ                                                                          |
| Columna 1: título y contexto                                                      |
| Columna 2: tarjeta institucional                                                  |
|            [Trayectoria] [Atención] [Reconocimiento] [Escalabilidad]             |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| PREVIEW DE CIRUGÍA ESTÉTICA                                                       |
| Texto + CTA hacia catálogo                                                        |
| [Card preview 1]                                                                  |
| [Card preview 2]                                                                  |
| [Card preview 3]                                                                  |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| CONTACTO                                                                          |
| Texto de conversión                      [Teléfono]                               |
|                                          [CTA WhatsApp]                          |
+----------------------------------------------------------------------------------+
```

## 2. Catálogo de Cirugía Estética

Archivo: `cirugia-estetica.html`

```text
+----------------------------------------------------------------------------------+
| HEADER                                                                           |
| [Logo]                         [Inicio] [Sobre mí] [Galería] [Contáctame]        |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| HERO DEL CATÁLOGO                                                                 |
| [Eyebrow]                                                                        |
| Título de cirugía estética                    [Nota lateral de acceso directo]    |
| Texto descriptivo                                                                  |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| NAVEGACIÓN POR CATEGORÍAS                                                         |
| [Cirugía Corporal] [Cirugía Facial] [Cirugía Mamaria] [Reconstructiva]           |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| CATEGORÍA: CIRUGÍA CORPORAL                                                       |
| Título + descripción                                                              |
| [Cuadro procedimiento] [Cuadro procedimiento] [Cuadro procedimiento]             |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| CATEGORÍA: CIRUGÍA FACIAL                                                         |
| Título + descripción                                                              |
| [Cuadro procedimiento] [Cuadro procedimiento] [Cuadro procedimiento]             |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| CATEGORÍA: CIRUGÍA MAMARIA                                                        |
| Título + descripción                                                              |
| [Cuadro procedimiento]                                                            |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| CATEGORÍA: CIRUGÍA RECONSTRUCTIVA                                                 |
| Título + descripción                                                              |
| [Cuadro procedimiento]                                                            |
+----------------------------------------------------------------------------------+
```

## 3. Página de Detalle del Procedimiento

Archivo: `procedimiento.html?slug=...`

```text
+----------------------------------------------------------------------------------+
| HEADER                                                                           |
| [Logo]                         [Inicio] [Sobre mí] [Galería] [Contáctame]        |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| HERO DEL PROCEDIMIENTO                                                            |
| [Volver a cirugía estética]                                                      |
| [Categoría]                                                                      |
| Título del procedimiento                    [Imagen cover / fallback visual]      |
| Intro del procedimiento                     [Mini galería 1] [Mini galería 2]     |
| [CTA WhatsApp]                               [Mini galería 3]                     |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| INFORMACIÓN                                                                       |
| [Descripción del procedimiento]          [Contacto / Teléfono / CTA]             |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| BLOQUES INFORMATIVOS                                                              |
| [Beneficios]                     [Candidatos ideales]                            |
| [Recuperación]                   [Preguntas frecuentes]                          |
+----------------------------------------------------------------------------------+
```

## 4. Wireframe de Flujo

```text
Landing
  -> CTA "Ver cirugía estética"
  -> Catálogo por categorías
      -> Click en cuadro
      -> Página de detalle del procedimiento
          -> CTA WhatsApp
```

## 5. Relación Funcional y POO

```text
Procedure
├─ slug
├─ category
├─ coverImage
├─ galleryImages
├─ textos médicos
└─ detalleUrl

ProcedureRepository
├─ all()
├─ categories()
├─ byCategory()
└─ bySlug()

Renderers
├─ LandingPreviewRenderer
├─ CatalogPageRenderer
└─ ProcedurePageRenderer
```
