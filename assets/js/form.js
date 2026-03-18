// form.js - Envío del formulario a Google Apps Script
const ENDPOINT = "https://script.google.com/macros/s/AKfycbyLZlzdAXw4G1XIvYd_ct8XFT-A-_zKnB3hd3YSCB7bN8g_nrTie9EX14gEXeGD-sj6/exec";

document.getElementById('rsvp-form').addEventListener('submit', async function(e){
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.disabled = true;
  const asistira = this.querySelector('input[name="asistira"]:checked');
  const bus = this.querySelector('input[name="bus"]:checked');

  const payload = {
    nombre: this.nombre.value,
    acompanantes: this.acompanantes.value,
    alergias: this.alergias.value,
    confirmado: asistira ? asistira.value : "",
    bus: bus ? bus.value : ""
  };

  try {
    // Usamos no-cors para evitar bloqueo si el endpoint no devuelve cabeceras CORS.
    await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    document.getElementById('mensaje').textContent ="¡Gracias por confirmar! Nos vemos en la boda 💍";
    this.reset();
  } catch(err){
    console.error(err);
    document.getElementById('mensaje').textContent = 'Error al enviar. Intenta más tarde.';
  } finally {
    btn.disabled = false;
  }
});
