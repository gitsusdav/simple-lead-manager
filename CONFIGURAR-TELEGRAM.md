# Configurar Notificaciones de Telegram

Este bot simple te enviará un mensaje de Telegram cada vez que alguien complete el formulario.

## Paso 1: Crear tu Bot de Telegram

1. **Abre Telegram y busca a @BotFather:**
   - En la barra de búsqueda escribe `@BotFather`
   - Selecciona el bot oficial (tiene un check azul de verificación)

2. **Crea un nuevo bot:**
   - Envía el comando `/newbot`
   - Elige un nombre para tu bot (ejemplo: "Mis Leads Bot")
   - Elige un username que termine en `bot` (ejemplo: `misleads_bot`)

3. **Recibirás tu Bot Token:**
   - BotFather te dará un token que se ve así: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`
   - **Guarda este token**, lo necesitarás en el siguiente paso

## Paso 2: Obtener tu Chat ID

1. **Busca a @userinfobot en Telegram:**
   - En la barra de búsqueda escribe `@userinfobot`
   - Inicia una conversación con el bot

2. **Envía cualquier mensaje:**
   - El bot te responderá con tu información
   - Verás tu `Id` que es un número (ejemplo: `123456789`)
   - **Guarda este Chat ID**

3. **Importante — Inicia una conversación con tu bot:**
   - Busca el bot que creaste en el Paso 1 por su username
   - Envía `/start` o cualquier mensaje
   - Esto es necesario para que el bot pueda enviarte mensajes

## Paso 3: Configurar el Código

1. Copia el archivo `config.example.js` y renómbralo como `config.js`

2. Abre `config.js` y reemplaza los valores con tus credenciales reales:

```javascript
window.APP_CONFIG = {
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/TU_ID/exec',

  TELEGRAM: {
    botToken: '123456789:ABCdefGHIjklMNOpqrsTUVwxyz',  // El token de BotFather
    chatId: '123456789',                                 // Tu Chat ID de @userinfobot
    enabled: true                                        // Cambia a true para activar
  }
};
```

**Importante:**
- El `botToken` es el que te dio @BotFather
- El `chatId` es el número que te dio @userinfobot
- No olvides cambiar `enabled: true` para activar las notificaciones
- El archivo `config.js` está en `.gitignore`, nunca se subirá al repositorio

## Paso 4: Guardar los Cambios

1. Guarda el archivo `config.js`

2. Ya está listo - no necesitas hacer nada más

## Paso 5: Probar

1. Abre `index.html` en tu navegador
2. Completa y envía el formulario con datos de prueba
3. Deberías recibir un mensaje de Telegram como este:

```
NUEVO LEAD RECIBIDO

Nombre: Juan Pérez
Email: juan@example.com
Proyecto: Desarrollo de app móvil
Presupuesto: $5000
```

4. Verifica también que los datos se hayan guardado en tu Google Sheet

## Formato del Mensaje

El mensaje incluye automáticamente:
- Nombre completo del lead
- Email de contacto
- Descripción del proyecto
- Presupuesto estimado

## Solución de Problemas

### No recibo mensajes de Telegram

- Verifica que hayas copiado `config.example.js` como `config.js`
- Verifica que el `botToken` y `chatId` estén correctos en `config.js`
- Asegúrate de haber cambiado `enabled: true`
- Comprueba que hayas iniciado una conversación con tu bot enviándole `/start`
- Abre la consola del navegador (F12) y busca errores
- Verifica que los archivos `config.js` y `telegram-notifier.js` estén cargados

### El Bot Token no funciona

- Verifica que copiaste el token completo de @BotFather
- El formato correcto es: `NUMEROS:LETRAS_Y_NUMEROS`
- Si perdiste el token, puedes obtener uno nuevo con `/token` en @BotFather

### El Chat ID está mal

- Asegúrate de usar tu Chat ID personal, no el del bot
- Usa @userinfobot para obtener el ID correcto
- El Chat ID debe ser solo números (ejemplo: `123456789`)

### No se carga el script

- Verifica que `config.js` y `telegram-notifier.js` estén en la misma carpeta que `index.html`
- Abre la consola del navegador (F12) → pestaña Console
- Busca errores de tipo "Failed to load resource"

## Límites del Servicio

Telegram Bot API es completamente gratuito y tiene límites muy generosos:
- Hasta 30 mensajes por segundo a diferentes chats
- Suficiente para la mayoría de casos de uso de leads

## Desactivar Notificaciones

Si quieres desactivar las notificaciones temporalmente:

1. En `config.js`, dentro del objeto `TELEGRAM`, cambia:
```javascript
enabled: false  // Cambiar de true a false
```

2. Guarda el archivo y recarga la página

## Enviar a un Grupo o Canal

Si quieres que las notificaciones lleguen a un grupo o canal en lugar de a tu chat personal:

1. Agrega tu bot al grupo o canal como administrador
2. Envía un mensaje en el grupo
3. Visita: `https://api.telegram.org/bot<TU_BOT_TOKEN>/getUpdates`
4. Busca el campo `chat.id` del grupo (suele ser un número negativo)
5. Usa ese ID en lugar de tu Chat ID personal

## Seguridad

- **Nunca compartas tu Bot Token** públicamente
- No subas archivos con tu Bot Token a repositorios públicos
- Si crees que tu token fue comprometido, genera uno nuevo con `/revoke` en @BotFather
