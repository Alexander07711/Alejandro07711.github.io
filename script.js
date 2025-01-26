// Mostrar mensaje para respuestas incorrectas
function wrongAnswer() {
  const message = document.getElementById('message');
  message.textContent = "¡Intenta de nuevo, Cami! Sabes que hay una mejor respuesta. 😊";
  message.classList.remove('hidden');
}

// Mostrar mensaje para la respuesta correcta
function correctAnswer() {
  const message = document.getElementById('message');
  message.textContent = "¡Sabía que elegirías esa respuesta, Cami! 💙 Nos vemos el domingo. 🎉";
  message.classList.remove('hidden');
  showConfetti();
}

// Efecto de confeti
function showConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  confettiContainer.classList.remove('hidden');
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Generar colores aleatorios para el confeti
function getRandomColor() {
  const colors = ['#007acc', '#82cfff', '#a2d9ff', '#005f99', '#cceeff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

