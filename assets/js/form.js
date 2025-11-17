// form.js - Envío del formulario a Google Apps Script
const ENDPOINT = "https://script.google.com/macros/s/AKfycbwMBRD1DxqwszdSSH5q6U7d9QI6tTACc420ULbuSYdXF-8ZmYqGPrQnHebDuMylZSua/exec";

document.getElementById('rsvp-form').addEventListener('submit', async function(e){
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.disabled = true;
  const payload = {
    nombre: this.nombre.value,
    acompanantes: this.acompanantes.value,
    alergias: this.alergias.value,
    confirmado: "Sí"
  };

  try {
    // Usamos no-cors para evitar bloqueo si el endpoint no devuelve cabeceras CORS.
    await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    document.getElementById('mensaje').textContent = '¡Gracias por confirmar! ❤️';
    this.reset();
  } catch(err){
    console.error(err);
    document.getElementById('mensaje').textContent = 'Error al enviar. Intenta más tarde.';
  } finally {
    btn.disabled = false;
  }
});
