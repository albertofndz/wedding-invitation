// Fecha objetivo
const fechaBoda = new Date("2026-10-03T00:00:00").getTime();

const intro = document.getElementById("intro");
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = Date.now();
  const diff = fechaBoda - ahora;

  if (diff <= 0) {
    intro.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "main.html";
    }, 1500);
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  contador.textContent = `${dias} días · ${horas} h · ${minutos} min · ${segundos} s`;
}

// Inicialización
actualizarContador();
setInterval(actualizarContador, 1000);
