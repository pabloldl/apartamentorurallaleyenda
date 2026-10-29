# Apartamento Rural La Leyenda

Rediseño local de 29 de octubre de 2026. HTML5, CSS3 y JavaScript vanilla, compatible con Live Server y sin compilación. Abrir index.html. Se mantiene la etiqueta robots noindex, nofollow.

## Diseño

Identidad íntima en marfil, cacao y verde suave, con Georgia y sans del sistema. Portada dominada por el salón, presentación fotográfica, galería asimétrica, detalles observables, ubicación y consulta de estancia. Navegación visible en móvil, sin menú oculto. Revelados discretos mediante IntersectionObserver y respeto a prefers-reduced-motion. Contenido y enlaces de imágenes utilizables sin JavaScript.

## Fotografías

Se inspeccionaron visualmente las siete imágenes de img/ mediante hoja de contacto. No existe carpeta imgs/. Se conservan todos los originales.

- 356320634.jpg (1024 × 768, 109 KB): portada y acceso ampliable en la galería; salón con iluminación natural y composición más completa.
- 355721951.jpg (1024 × 768, 110 KB): presentación; rincón con sofá y balcón.
- 356437784.jpg (576 × 768, 86 KB): fotografía vertical en galería, sin forzar un recorte horizontal.
- 355801789.jpg (1024 × 768, 183 KB): exterior y jardines de la urbanización.
- 389240797.jpg (1024 × 576, 109 KB): piscina de las zonas comunes.
- pueblo.jpg: contexto de El Bosque, identificado como entorno, con créditos CC BY-SA 4.0 de El Pantera en el pie y procedencia conservada en img/sources.json.
- portada.jpg: descartada del diseño por su encuadre desde carretera y menor afinidad con la experiencia interior.

Las nuevas imágenes se consideran material facilitado por el usuario para este proyecto. No se han obtenido imágenes de otras propiedades. Los JPEG nuevos ya tienen pesos contenidos y no se recomprimen para evitar pérdida innecesaria; no se generaron WebP. Lazy loading fuera del hero, tamaños intrínsecos, alt descriptivos y prioridad alta en portada. La misma imagen del salón aparece como portada y en la galería para poder ampliarla.

## Datos y reserva

Se mantiene la ubicación general El Bosque, Cádiz, y el enlace existente a Booking.com:
https://www.booking.com/hotel/es/apartamento-rural-la-leyenda-el-bosque1.es.html

La consulta automatizada a Booking.com el 29 de octubre devolvió una comprobación antirrobot; no se pudo revalidar la ficha actual ni completar una reserva. Los datos previos de superficie, número de dormitorios/baños, cocina, Wi-Fi y normas se han retirado del contenido por no haber podido contrastarlos en esta revisión. Se describen elementos visibles en las fotografías. La piscina se identifica como común y se pide consultar apertura y condiciones. No hay precios, calendarios, valoraciones ni contactos inventados. El mapa sitúa únicamente el municipio. Se conservan metadatos útiles y JSON-LD de ubicación general; Open Graph usa la foto del salón. Antes de publicar, og:image necesitará la URL absoluta del dominio definitivo.

## Verificación ejecutada

- node --check js/script.js: correcto.
- Comprobación estática: recursos locales existentes, JSON-LD válido y noindex presente.
- Chrome headless: 375, 768, 1440 y 1920 px; sin desbordamiento horizontal, h1 dentro de pantalla, todos los enlaces internos con destino y todas las fotografías de contenido cargadas. La imagen vacía del visor no tiene src hasta abrirlo; no es un recurso fallido.
- Galería: apertura, siguiente/anterior por botones, flecha de teclado, Escape mediante protocolo de entrada del navegador, cierre, retorno del foco tras procesarse close y gesto táctil mediante TouchEvent simulado. No equivale a una prueba en dispositivo físico.
- prefers-reduced-motion: desplazamiento suave desactivado.
- Cero excepciones de ejecución capturadas en Runtime de Chrome. No se ha realizado auditoría exhaustiva de consola ni de accesibilidad.
- Capturas a las cuatro anchuras; revisión visual de portada en 375 y 1440, presentación en 1440 y galería/cierre en 375. Evidencias locales en .qa/, excluidas de Git.
- Safari/iPhone real no probado. No se compararon visualmente las otras webs; el trabajo se restringió a esta carpeta.

## Pendiente de confirmación

Condiciones vigentes de reserva, apertura/uso de piscina y cualquier canal directo de teléfono, correo o WhatsApp que se quiera incorporar. No se necesita formulario ni backend para el enlace a Booking.com.

Archivos de producto modificados: index.html, css/style.css, js/script.js, favicon.svg y este README. Recursos originales conservados. Sin despliegues, commits ni pushes. El servidor y el navegador propios de las pruebas se cerraron.
