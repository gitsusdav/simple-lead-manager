// ========== CONFIGURACIÓN DE WHATSAPP ==========
const WHATSAPP_CONFIG = {
  phone: '584121040181',      // Ejemplo: '34612345678' (código país + número sin +)
  apiKey: '3512271',    // Tu API Key de CallMeBot
  enabled: true                 // Cambia a true cuando tengas configurado
};

// Función para enviar notificación de WhatsApp
async function enviarNotificacionWhatsApp(data) {
  // Si WhatsApp no está habilitado, no hacer nada
  if (!WHATSAPP_CONFIG.enabled) {
    console.log('WhatsApp deshabilitado. Configura whatsapp-notifier.js para activarlo.');
    return;
  }

  try {
    // Crear mensaje
    const mensaje = `NUEVO LEAD RECIBIDO\n\n` +
                   `Nombre: ${data.nombre} ${data.apellido}\n` +
                   `Email: ${data.email}\n` +
                   `Proyecto: ${data.proyecto}\n` +
                   `Presupuesto: ${data.presupuesto || 'No especificado'}`;

    // URL de la API de CallMeBot
    const url = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_CONFIG.phone}&text=${encodeURIComponent(mensaje)}&apikey=${WHATSAPP_CONFIG.apiKey}`;

    // Enviar mensaje
    await fetch(url, { mode: 'no-cors' });

    console.log('Notificación de WhatsApp enviada');

  } catch (error) {
    console.error('Error al enviar WhatsApp:', error);
  }
}
