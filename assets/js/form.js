// form.js - Envío del formulario a Google Apps Script (versión estable con FormData)

const ENDPOINT = "https://script.google.com/macros/s/AKfycbyLZlzdAXw4G1XIvYd_ct8XFT-A-_zKnB3hd3YSCB7bN8g_nrTie9EX14gEXeGD-sj6/exec";

document.getElementById('rsvp-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = this;
  const btn = form.querySelector('button[type="submit"]');
  const mensaje = document.getElementById('mensaje');

  btn.disabled = true;
  mensaje.textContent = "Enviando...";

  // Obtener valores seguros
  const asistira = form.querySelector('input[name="asistira"]:checked');
  const bus = form.querySelector('input[name="bus"]:checked');

  const nombre = form.nombre.value.trim();
  const acompanantes = form.acompanantes.value;
  const alergias = form.alergias.value;

  // Crear FormData (clave para que funcione bien)
  const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("acompanantes", acompanantes);
  formData.append("alergias", alergias);
  formData.append("confirmado", asistira ? asistira.value : "");
  formData.append("bus", bus ? bus.value : "");

  try {
    await fetch(ENDPOINT, {
      method: "POST",
      body: formData
    });

    mensaje.textContent = "¡Gracias por confirmar! Nos vemos en la boda 💍";
    mensaje.style.color = "green";

    form.reset();

  } catch (error) {
    console.error(error);
    mensaje.textContent = "Error al enviar. Inténtalo más tarde.";
    mensaje.style.color = "red";
  } finally {
    btn.disabled = false;
  }
});