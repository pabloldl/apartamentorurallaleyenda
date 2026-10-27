# Apartamento Rural La Leyenda

Web local de HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server o directamente en un navegador. Sin instalación, compilación, backend ni despliegue. Todos los recursos necesarios son locales.

## Concepto y decisiones

Atlas contemporáneo de cuatro capítulos: elegir el lugar, conocer el apartamento, explorar y preparar el viaje. Índice lateral con progreso y capítulo activo; en móvil, índice desplegable de dos columnas con cierre por Escape y retorno del foco. Portada con una lámina independiente del título, ficha editorial sin tarjetas, notas nativas desplegables, paisaje a sangre lateral y cierre de contraportada. Literata, sans del sistema y monoespaciada para referencias. Paleta pergamino, bosque, cobre y pizarra.

Revelado inicial de lámina mediante máscara, línea trazada al entrar en el capítulo y marcadores con respuesta al puntero. Sin scroll secuestrado. Todo el contenido permanece visible sin JavaScript; las animaciones se anulan con `prefers-reduced-motion`.

## Investigación — 27 de octubre de 2026

- [Ficha de La Leyenda en Booking.com](https://www.booking.com/hotel/es/apartamento-rural-la-leyenda-el-bosque1.es.html): coincide el nombre y El Bosque. Fuente del equipamiento, superficie, dormitorios, baños, normas y enlace real para consultar y reservar. No se reproducen valoraciones ni precios.
- La ficha publica Los Membrillos, 4, Primero C, y VFT/CA/16064. Se conservan como referencias de investigación; la web presenta solo la ubicación general facilitada. La licencia no se contrastó con el registro administrativo y por eso no se publica como verificada en la web.
- La capacidad y las condiciones para niños deben consultarse para la composición concreta del grupo; se omite una cifra de ocupación en la web.
- La información de apertura de piscina contiene fechas contradictorias dentro de la ficha. Se indica únicamente que es comunitaria y de temporada, con confirmación en plataforma.
- No se localizó teléfono, correo, WhatsApp, web independiente ni perfil social oficial inequívoco en las búsquedas realizadas. No se han inventado canales. Booking.com es el canal operativo publicado, sin presentarlo como web oficial del negocio.
- Las fotografías auténticas del apartamento pueden verse en Booking.com, pero no se encontró autorización para reutilizarlas. No se descargaron ni sustituyeron por interiores ajenos. El gráfico de la ficha es un símbolo editorial expresamente identificado como tal, no un plano del inmueble.
- [Junta de Andalucía: sendero Río Majaceite](https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/r-c3-ado-majaceite/255035): vínculo El Bosque–Benamahoma, contexto natural y consulta de indicaciones vigentes. No se ofrecen actividades ni se calculan distancias desde el apartamento.
- Google Maps sitúa el municipio. No existe marcador ni coordenada inventada de la propiedad.

## Fotografías y tipografía

Ambas fotos representan el entorno y así se identifican en pies, alternativas y colofón. No son vistas desde el apartamento. Autor: **El Pantera**. Licencia: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Los archivos adaptados mantienen la misma licencia.

| Archivo | Original | Tratamiento |
| --- | --- | --- |
| `img/pueblo.jpg` | [ElBosque-P1050286.JPG](https://commons.wikimedia.org/wiki/File:ElBosque-P1050286.JPG) | Miniatura de Commons, JPEG 1920 × 1440; encuadre CSS y saturación reducida. |
| `img/portada.jpg` | [ElBosqueDesdeCarretera.jpg](https://commons.wikimedia.org/wiki/File:ElBosqueDesdeCarretera.jpg) | Miniatura de Commons, JPEG 1920 × 1440; encuadre CSS y saturación reducida. |

Metadatos de procedencia y licencia conservados en `img/sources.json`. Se verificaron formato JPEG, decodificación, dimensiones y carga en Chrome. Se descartaron las primeras candidatas por contenido inadecuado o reutilización documentada. Las dos fuentes finales no aparecieron en la búsqueda de identificadores en los README de los otros proyectos; esto no garantiza detectar imágenes ajenas sin procedencia registrada.

Literata procede de [Google Fonts](https://github.com/google/fonts/tree/main/ofl/literata), bajo SIL Open Font License 1.1. Archivo de licencia: `css/OFL-Literata.txt`. Favicon SVG original.

## Verificación realizada

- `node --check js/script.js`: correcto.
- Chrome headless real: 375, 768, 1440 y 1920 px. Sin desbordamiento horizontal; título dentro del viewport; ambas imágenes decodificadas; cero destinos internos inexistentes.
- Pruebas funcionales en Chrome: abrir índice móvil, cerrar por Escape, desplegar notas y anular animación con movimiento reducido. Todas correctas.
- Capturas generadas a las cuatro anchuras; revisión visual directa de portada en 375 y 1440 px y ficha de apartamento en 1440 px. Evidencias y script de comprobación en `.qa/`, excluidos del control de versiones. El servidor y Chrome usados para pruebas se cerraron.
- Se revisaron las fuentes HTML/CSS de Las Buganvillas y La Cascada: se evita su navegación superior, composición de portada, galería, contacto y pie. No se realizó comparación visual en navegador de las webs anteriores.
- SEO: título, descripción, Open Graph y JSON-LD LodgingBusiness con ubicación general. Antes de publicar, añadir dominio definitivo y convertir `og:image` en URL absoluta; no se inventa un dominio ni se añade canonical provisional.
- Accesibilidad: idioma, landmarks, jerarquía, alternativas, enlace de salto, focus visible, controles nativos y soporte de teclado. No se afirma auditoría completa con lector de pantalla.

## Pendiente del propietario

Teléfono y correo, autorización de fotografías del alojamiento, confirmación de licencia administrativa y condiciones actualizadas. No son necesarios para que el enlace actual a la plataforma funcione. Revalidar la ficha y las normas antes de una futura publicación.

No se modificaron otros proyectos. No se generó configuración de hosting ni se desplegó la web.
