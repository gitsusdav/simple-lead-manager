# Configurar Notificaciones de WhatsApp

Este bot simple te enviará un mensaje de WhatsApp cada vez que alguien complete el formulario.

## Paso 1: Obtener tu API Key de CallMeBot

1. **Agrega el número de CallMeBot a tus contactos de WhatsApp:**
   - Guarda este número: **+34 644 44 42 09**
   - Nómbralo como "CallMeBot" o lo que prefieras

2. **Envía un mensaje para obtener tu API Key:**
   - Abre WhatsApp
   - Envía este mensaje exacto al número que acabas de guardar:
   ```
   I allow callmebot to send me messages
   ```

3. **Recibirás tu API Key:**
   - En unos segundos recibirás un mensaje con tu API Key
   - Se verá algo así: `123456` (un número)
   - **Guarda esta API Key**, la necesitarás en el siguiente paso

## Paso 2: Configurar el Código

1. Abre el archivo `whatsapp-notifier.js`

2. Reemplaza estos valores en las líneas 3-5:

```javascript
const WHATSAPP_CONFIG = {
  phone: '34612345678',    // Tu número con código de país SIN el +
  apiKey: '123456',        // El API Key que recibiste
  enabled: true            // Cambia a true para activar
};
```

**Importante:**
- El número debe incluir el código de país SIN el símbolo +
- Ejemplo para España: `34612345678`
- Ejemplo para México: `521234567890`
- Ejemplo para Argentina: `5491123456789`
- No olvides cambiar `enabled: true` para activar las notificaciones

## Paso 3: Guardar los Cambios

1. Guarda el archivo `whatsapp-notifier.js`

2. Ya está listo - no necesitas hacer nada más

## Paso 4: Probar

1. Abre `index.html` en tu navegador
2. Completa y envía el formulario con datos de prueba
3. Deberías recibir un mensaje de WhatsApp como este:

```
🔔 NUEVO LEAD RECIBIDO

👤 Nombre: Juan Pérez
📧 Email: juan@example.com
💼 Proyecto: Desarrollo de app móvil
💰 Presupuesto: $5000
```

4. Verifica también que los datos se hayan guardado en tu Google Sheet

## Formato del Mensaje

El mensaje incluye automáticamente:
- Nombre completo del lead
- Email de contacto
- Descripción del proyecto
- Presupuesto estimado

## Solución de Problemas

### No recibo mensajes de WhatsApp

- Verifica que el número y API Key estén correctos en `whatsapp-notifier.js`
- Asegúrate de haber cambiado `enabled: true`
- Comprueba que hayas enviado el mensaje "I allow callmebot to send me messages"
- Abre la consola del navegador (F12) y busca errores
- Verifica que el archivo `whatsapp-notifier.js` esté cargado

### El API Key no funciona

- El mensaje debe ser exactamente: `I allow callmebot to send me messages`
- Espera 1-2 minutos después de enviar el mensaje
- Si no funciona, intenta enviar el mensaje de nuevo

### El número está mal formateado

Formato correcto: `[código país][número sin espacios ni +]`
- ✅ Correcto: `34612345678`
- ❌ Incorrecto: `+34 612 345 678`
- ❌ Incorrecto: `612345678`

### No se carga el script

- Verifica que `whatsapp-notifier.js` esté en la misma carpeta que `index.html`
- Abre la consola del navegador (F12) → pestaña Console
- Busca errores de tipo "Failed to load resource"

## Límites del Servicio Gratuito

CallMeBot es un servicio gratuito con algunas limitaciones:
- Máximo de mensajes por día (varía, generalmente suficiente para leads)
- Si necesitas mayor capacidad, considera usar la API de WhatsApp Business

## Desactivar Notificaciones

Si quieres desactivar las notificaciones temporalmente:

1. En `whatsapp-notifier.js`, cambia:
```javascript
enabled: false  // Cambiar de true a false
```

2. Guarda el archivo y recarga la página

## Seguridad

- **Nunca compartas tu API Key** públicamente
- No subas archivos con tu API Key a repositorios públicos
- Si crees que tu API Key fue comprometida, solicita una nueva enviando el mensaje de activación nuevamente
