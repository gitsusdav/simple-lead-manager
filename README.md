# Simple Lead Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sistema de gestión de leads con formulario web moderno, almacenamiento en Google Sheets y notificaciones por WhatsApp.

## Descripción

Formulario web elegante en modo oscuro que captura solicitudes de proyectos y las almacena automáticamente en Google Sheets. Incluye notificaciones instantáneas por WhatsApp para que nunca pierdas un lead. Perfecto para freelancers, agencias y emprendedores que necesitan gestionar leads de forma simple y efectiva.

## Características

### Diseño y Experiencia de Usuario
- Diseño moderno en modo oscuro con gradientes
- Fuente Montserrat profesional
- Formulario responsive (móvil y desktop)
- Animaciones y transiciones suaves
- Validación de campos en tiempo real
- Feedback visual para el usuario (estados de carga, éxito y error)

### Funcionalidades
- Integración automática con Google Sheets
- Notificaciones instantáneas por WhatsApp (opcional)
- Timestamp automático en cada lead
- Organización automática de datos con encabezados formateados

### Ventajas Técnicas
- 100% gratis usando Google Sheets como base de datos
- Sin backend requerido - deploy en segundos
- Datos seguros en tu cuenta de Google
- Fácil de personalizar y extender

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
- Editor de código

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

### 4. Configurar Notificaciones de WhatsApp

Si quieres recibir un mensaje de WhatsApp cada vez que alguien complete el formulario:

1. Lee el archivo `CONFIGURAR-WHATSAPP.md` para obtener instrucciones detalladas
2. En resumen:
   - Envía "I allow callmebot to send me messages" al número +34 644 44 42 09
   - Recibe tu API Key
   - Configura `whatsapp-notifier.js` con tu número y API Key
   - Cambia `enabled: true` en la configuración

## Uso


1. Navega a la carpeta del proyecto
2. Abre `index.html` en tu navegador
3. Completa el formulario y haz clic en "Enviar Solicitud"
4. Verifica que los datos aparezcan en tu Google Sheet y que hayas recibido el mensaje a tu numero


## Estructura del Proyecto

```
simple-lead-manager/
│
├── index.html                      # Formulario principal
├── main.js                         # Lógica del formulario
├── whatsapp-notifier.js            # Bot de WhatsApp 
│
├── google-script.gs                # Código para Google Apps Script
│
├── INSTRUCCIONES-GOOGLE-SHEETS.md  # Guía de configuración de Google Sheets
├── CONFIGURAR-WHATSAPP.md          # Guía de configuración de WhatsApp
├── README.md                       # Este archivo

│
├── .gitignore                      # Archivos ignorados por Git
└── LICENSE                         # Licencia MIT
```




## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3 con Tailwind CSS
- **JavaScript**: Vanilla JS (sin frameworks)
- **Backend**: Google Apps Script
- **Base de datos**: Google Sheets
- **Notificaciones**: CallMeBot WhatsApp API
- **Tipografía**: Google Fonts (Montserrat)
- **Hosting**: Compatible con GitHub Pages, Netlify, Vercel, o cualquier servidor estático

## Flujo de Trabajo

1. **Cliente completa el formulario** → Valida campos requeridos
2. **Envío a Google Sheets** → Los datos se guardan automáticamente en una fila nueva
3. **Notificación WhatsApp** → Recibes un mensaje instantáneo con los datos del lead
4. **Gestión** → Puedes gestionar, filtrar y analizar tus leads directamente en Google Sheets

## Seguridad y Privacidad

- El formulario usa modo `no-cors` para evitar problemas de CORS
- No se almacenan datos sensibles en el cliente
- La URL de Google Apps Script es segura y puede ser pública
- Los datos solo son accesibles desde tu cuenta de Google
- La API Key de WhatsApp nunca se expone públicamente si usas `whatsapp-notifier.js`
- **Importante**: No subas archivos con tu API Key a repositorios públicos

## Contribuir

Las contribuciones son bienvenidas. 

**Instrucciones:**

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request


## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## Créditos

Construido con:

- **Framework CSS**: [Tailwind CSS](https://tailwindcss.com)
- **Tipografía**: [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Backend**: [Google Apps Script](https://developers.google.com/apps-script)
- **Base de datos**: [Google Sheets](https://sheets.google.com)
- **WhatsApp API**: [CallMeBot](https://callmebot.com)

---

*Si este proyecto te ayudó, considera darle una estrella en GitHub*
