// Countdown logic for index.html
(function(){
  const fechaBoda = new Date("2026-10-03T00:00:00").getTime();
  const contadorEl = document.getElementById('contador');
  const enterBtn = document.getElementById('enterBtn');

  function actualizar(){
    const ahora = Date.now();
    const diff = fechaBoda - ahora;
    if(diff <= 0){
      contadorEl.textContent = '¡Hoy es el gran día!';
      setTimeout(()=> location.href = 'main.html', 1200);
      return;
    }
    const dias = Math.floor(diff / (1000*60*60*24));
    const horas = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((diff % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((diff % (1000*60)) / 1000);
    contadorEl.textContent = `${dias} días · ${horas} h · ${minutos} min · ${segundos} s`;
  }

  enterBtn.addEventListener('click', ()=> location.href = 'main.html');

  actualizar();
  setInterval(actualizar, 1000);
})();
