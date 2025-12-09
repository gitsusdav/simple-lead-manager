// Script de Google Apps Script para Google Sheets
// Copia este código en Google Apps Script (Extensiones > Apps Script)

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

// Función de prueba (opcional)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Juan',
        apellido: 'Pérez',
        email: 'juan@example.com',
        telefono: '+123456789',
        pais: 'España',
        referencia: 'Google',
        proyecto: 'Desarrollo de aplicación web',
        presupuesto: '$5000',
        fecha: new Date().toLocaleString('es-ES')
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
