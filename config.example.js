// ========== CONFIGURACIÓN DEL PROYECTO ==========
// Copia este archivo como `config.js` y reemplaza los valores con tus credenciales reales
// IMPORTANTE: El archivo `config.js` NO debe subirse a repositorios públicos (ya está en .gitignore)

window.APP_CONFIG = {
  // URL de Google Apps Script (obtenida al desplegar tu script como aplicación web)
  GOOGLE_SCRIPT_URL: 'tu link',

  // Configuración de Telegram
  TELEGRAM: {
    botToken: 'token',  // Token de @BotFather
    chatId: 'id',                                 // Tu Chat ID de @userinfobot
    enabled: true                                        // true para activar, false para desactivar
  }
};
