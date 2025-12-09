# Instrucciones para Conectar el Formulario con Google Sheets

## Paso 1: Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Ponle un nombre (ejemplo: "Leads de Proyectos")

## Paso 2: Abrir Google Apps Script

1. En tu Google Sheet, ve al menú **Extensiones** > **Apps Script**
2. Se abrirá el editor de Google Apps Script

## Paso 3: Copiar el Código

1. Borra el código predeterminado que aparece
2. Copia todo el contenido del archivo `google-script.gs`
3. Pégalo en el editor de Apps Script
4. Haz clic en el ícono de **guardar** (💾)

## Paso 4: Implementar como Aplicación Web

1. En el editor de Apps Script, haz clic en **Implementar** > **Nueva implementación**
2. Haz clic en el ícono de engranaje ⚙️ junto a "Selecciona el tipo"
3. Selecciona **Aplicación web**
4. Configura lo siguiente:
   - **Descripción**: "API para formulario de leads" (o la que prefieras)
   - **Ejecutar como**: Tu cuenta (Yo)
   - **Quién tiene acceso**: Cualquier persona
5. Haz clic en **Implementar**
6. **IMPORTANTE**: Copia la **URL de la aplicación web** que aparece. Se verá algo así:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

## Paso 5: Configurar el Archivo main.js

1. Abre el archivo `main.js`
2. En la línea 2, reemplaza `'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI'` con la URL que copiaste
3. Debería quedar así:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
   ```
4. Guarda el archivo

## Paso 6: Probar el Formulario

1. Abre el archivo `index.html` en tu navegador
2. Completa el formulario con datos de prueba
3. Haz clic en "Enviar Solicitud"
4. Verifica que los datos aparezcan en tu Google Sheet

## Estructura de la Hoja

La primera vez que se envíe un formulario, se crearán automáticamente los siguientes encabezados:

| Fecha | Nombre | Apellido | Email | Teléfono | País | Referencia | Proyecto | Presupuesto |
|-------|--------|----------|-------|----------|------|------------|----------|-------------|

## Solución de Problemas

### El formulario no envía datos
- Verifica que la URL en `main.js` sea correcta
- Asegúrate de que la implementación esté configurada con acceso "Cualquier persona"
- Revisa la consola del navegador (F12) para ver errores

### No aparece el mensaje de confirmación
- Esto es normal debido al modo `no-cors`. Si los datos llegan a la hoja, está funcionando correctamente.

### Error de permisos
- En la primera implementación, Google te pedirá autorizar la aplicación
- Haz clic en "Revisar permisos" y autoriza con tu cuenta de Google

## Notas Adicionales

- Los datos se guardan automáticamente en la hoja activa de tu Google Sheet
- Cada envío crea una nueva fila con la fecha y hora actual
- Puedes personalizar los encabezados editando el archivo `google-script.gs`
- El script ajusta automáticamente el ancho de las columnas para mejor visualización

## Función de Prueba (Opcional)

Si quieres probar el script antes de conectarlo al formulario:

1. En el editor de Apps Script, selecciona la función `testDoPost` en el menú desplegable
2. Haz clic en **Ejecutar**
3. Verifica que se agregue una fila de prueba en tu Google Sheet
