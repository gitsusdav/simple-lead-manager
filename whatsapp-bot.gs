// ========== BOT DE WHATSAPP SIMPLE ==========
// Este archivo es una extensión opcional del google-script.gs
// Copia este código DESPUÉS del código principal de google-script.gs

// CONFIGURACIÓN
const WHATSAPP_PHONE = 'TU_NUMERO_AQUI'; // Ejemplo: '34612345678' (código país + número sin +)
const WHATSAPP_API_KEY = 'TU_API_KEY_AQUI'; // Tu API Key de CallMeBot

// Función para enviar mensaje de WhatsApp
function enviarWhatsApp(nombre, apellido, email, proyecto, presupuesto) {
  try {
    // Crear mensaje
    const mensaje = `🔔 NUEVO LEAD RECIBIDO\n\n` +
                   `👤 Nombre: ${nombre} ${apellido}\n` +
                   `📧 Email: ${email}\n` +
                   `💼 Proyecto: ${proyecto}\n` +
                   `💰 Presupuesto: ${presupuesto || 'No especificado'}`;

    // URL de la API de CallMeBot
    const url = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensaje)}&apikey=${WHATSAPP_API_KEY}`;

    // Enviar mensaje
    const response = UrlFetchApp.fetch(url);

    Logger.log('Mensaje de WhatsApp enviado: ' + response.getContentText());
    return true;

  } catch (error) {
    Logger.log('Error al enviar WhatsApp: ' + error);
    return false;
  }
}

// REEMPLAZA la función doPost en google-script.gs con esta versión:
function doPost(e) {
  try {
    // Obtener la hoja de cálculo activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents);

    // Extraer valores
    const nombre = data.nombre || '';
    const apellido = data.apellido || '';
    const email = data.email || '';
    const telefono = data.telefono || '';
    const pais = data.pais || '';
    const referencia = data.referencia || '';
    const proyecto = data.proyecto || '';
    const presupuesto = data.presupuesto || '';
    const fecha = data.fecha || new Date().toLocaleString('es-ES');

    // Verificar si es la primera fila (agregar encabezados)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha',
        'Nombre',
        'Apellido',
        'Email',
        'Teléfono',
        'País',
        'Referencia',
        'Proyecto',
        'Presupuesto'
      ]);

      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4B5563');
      headerRange.setFontColor('#FFFFFF');
    }

    // Agregar nueva fila con los datos
    sheet.appendRow([
      fecha,
      nombre,
      apellido,
      email,
      telefono,
      pais,
      referencia,
      proyecto,
      presupuesto
    ]);

    // Ajustar el ancho de las columnas automáticamente
    sheet.autoResizeColumns(1, 9);

    // ENVIAR MENSAJE DE WHATSAPP
    enviarWhatsApp(nombre, apellido, email, proyecto, presupuesto);

    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Retornar error
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
