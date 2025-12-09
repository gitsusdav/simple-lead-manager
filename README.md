# Simple Lead Manager

Sistema de gestión de leads sencillo para prueba con formulario web moderno y almacenamiento en Google Sheets.

## Descripción

Formulario web super elegante 🍷 que permite capturar solicitudes de proyectos y almacenarlas automáticamente en Google Sheets. Perfecto para usuarios que necesitan gestionar leads de forma simple y efectiva.

## Características

- Diseño moderno en modo oscuro
- Fuente Montserrat profesional
- Formulario responsive (móvil y desktop)
- Integración automática con Google Sheets
- Validación de campos requeridos
- Feedback visual para el usuario (estados de carga, éxito y error)
- Sin backend requerido - 100% gratis usando Google Sheets

## Campos del Formulario

- Nombre (requerido)
- Apellido (requerido)
- Email (requerido)
- Teléfono
- País
- Referencia (¿Cómo nos conociste?)
- Datos del proyecto (requerido)
- Presupuesto estimado
- Fecha de envío (automática)

## Requisitos Previos

- Una cuenta de Google (para Google Sheets)
- Un navegador web moderno
- Editor de código (opcional)

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/simple-lead-manager.git
cd simple-lead-manager
```
O hazlo simplemente desde github 
### 2. Configurar Google Sheets

#### a) Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Ponle un nombre (ejemplo: "Mis Leads")

#### b) Configurar Google Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Borra el código predeterminado
3. Copia todo el contenido del archivo `google-script.gs`
4. Pégalo en el editor y guarda (Ctrl + S)

#### c) Implementar como Aplicación Web

1. Haz clic en **Implementar** → **Nueva implementación**
2. Selecciona el tipo **Aplicación web**
3. Configura:
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: Cualquier persona
4. Haz clic en **Implementar**
5. **COPIA LA URL** que aparece (se verá como `https://script.google.com/macros/s/...`)
6. Autoriza la aplicación cuando Google te lo pida

### 3. Configurar la URL en el Proyecto

1. Abre el archivo `main.js`
2. En la línea 2, reemplaza la URL existente con tu URL:

```javascript
const GOOGLE_SCRIPT_URL = 'TU_URL_COPIADA_AQUI';
```

## Uso

### Método 1: Abrir directamente el HTML

1. Navega a la carpeta del proyecto
2. Abre `index.html` en tu navegador
3. Completa el formulario y haz clic en "Enviar Solicitud"
4. Verifica que los datos aparezcan en tu Google Sheet

### Método 2: Usar un servidor local (recomendado para desarrollo)

```bash
# Si tienes Python 3 instalado
python -m http.server 8000

# O si tienes Node.js con npx
npx serve
```

Luego abre `http://localhost:8000` en tu navegador.

### Método 3: Desplegar en GitHub Pages (gratis)

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. En "Source" selecciona la rama `main` y carpeta `/ (root)`
4. Guarda y espera unos minutos
5. Tu formulario estará disponible en `https://TU_USUARIO.github.io/simple-lead-manager/`

## Estructura del Proyecto

```
simple-lead-manager/
│
├── index.html                      # Formulario principal
├── main.js                         # Lógica del formulario
├── google-script.gs                # Código para Google Apps Script
├── INSTRUCCIONES-GOOGLE-SHEETS.md  # Guía detallada de configuración
└── README.md                       # Este archivo
```

## Personalización

### Cambiar colores

Edita las clases de Tailwind en `index.html`:

```html
<!-- Cambiar gradiente del fondo -->
<body class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

<!-- Cambiar gradiente del título -->
<h1 class="... bg-gradient-to-r from-blue-400 to-purple-500">
```

### Añadir más campos

1. Agrega el campo en `index.html`
2. Crea una variable en `main.js`
3. Añade el campo al objeto `data`
4. Actualiza el encabezado en `google-script.gs`

### Cambiar la fuente

Reemplaza el enlace de Google Fonts en `index.html` y actualiza la configuración de Tailwind.

## Solución de Problemas

### El formulario no envía datos

- Verifica que la URL en `main.js` sea correcta
- Asegúrate de que la implementación en Google Apps Script esté configurada con acceso "Cualquier persona"
- Revisa la consola del navegador (F12) para ver errores

### Los datos no aparecen en Google Sheets

- Verifica que hayas autorizado la aplicación en Google
- Comprueba que la URL de implementación sea la correcta
- Prueba la función `testDoPost()` en el editor de Apps Script

### Error de CORS

- Es normal ver advertencias de CORS en la consola debido al modo `no-cors`
- Si los datos llegan a la hoja, el formulario está funcionando correctamente

## Tecnologías Utilizadas

- HTML5
- CSS3 con Tailwind CSS
- JavaScript (Vanilla)
- Google Apps Script
- Google Sheets API

## Seguridad

- El formulario usa modo `no-cors` para evitar problemas de CORS
- No se almacenan datos sensibles en el cliente
- La URL de Google Apps Script es segura y puede ser pública
- Los datos solo son accesibles desde tu cuenta de Google

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en el repositorio.

## Créditos

- Diseño: Tailwind CSS
- Tipografía: Google Fonts (Montserrat)
- Almacenamiento: Google Sheets

---

Hecho con ❤️ para simplificar la gestión de leads
