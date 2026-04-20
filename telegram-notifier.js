// ========== NOTIFICADOR DE TELEGRAM ==========
// Lee la configuración desde window.APP_CONFIG (definido en config.js)

// Función para enviar notificación por Telegram
async function enviarNotificacionTelegram(data) {
  const config = window.APP_CONFIG && window.APP_CONFIG.TELEGRAM;

  if (!config) {
    console.warn('config.js no está cargado. Copia config.example.js a config.js y configura tus credenciales.');
    return;
  }

  if (!config.enabled) {
    console.log('Telegram deshabilitado. Cambia TELEGRAM.enabled a true en config.js para activarlo.');
    return;
  }

  try {
    const mensaje = `<b>NUEVO LEAD RECIBIDO</b>\n\n` +
                   `<b>Nombre:</b> ${data.nombre} ${data.apellido}\n` +
                   `<b>Email:</b> ${data.email}\n` +
                   `<b>Proyecto:</b> ${data.proyecto}\n` +
                   `<b>Presupuesto:</b> ${data.presupuesto || 'No especificado'}`;

    const url = `https://api.telegram.org/bot${config.botToken}/sendMessage`;

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: mensaje,
        parse_mode: 'HTML'
      })
    });

    console.log('Notificación de Telegram enviada');

  } catch (error) {
    console.error('Error al enviar Telegram:', error);
  }
}
