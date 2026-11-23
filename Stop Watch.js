let startTime = 0, elapsed = 0, timer = null;
const clock = document.getElementById("clock");

const pad = n => String(n).padStart(2, "0");

function render() {
  const total = Math.floor(elapsed / 1000);
  clock.textContent =
    `${pad(Math.floor(total / 3600))} : ${pad(Math.floor(total / 60) % 60)} : ${pad(total % 60)}`;
}

function watchStart() {
  if (timer !== null) return;
  startTime = Date.now() - elapsed;
  timer = setInterval(() => { elapsed = Date.now() - startTime; render(); }, 250);
}

function watchStop() { clearInterval(timer); timer = null; }

function watchReset() { watchStop(); elapsed = 0; render(); }