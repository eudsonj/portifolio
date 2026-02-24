// Criar partículas brilhantes no fundo
const body = document.body;

for(let i=0; i<40; i++){
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random()*100+'%';
  star.style.left = Math.random()*100+'%';
  star.style.animationDuration = (2+Math.random()*3)+'s';
  body.appendChild(star);
}

// Estilo das estrelas
const style = document.createElement('style');
style.innerHTML = `
  .star {
    position: fixed;
    width: 3px;
    height: 3px;
    background: #00ffe0;
    border-radius: 50%;
    opacity: 0.5;
    animation: twinkle infinite;
  }

  @keyframes twinkle {
    0%,100% { opacity: 0.2; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;
document.head.appendChild(style);

// Função para filtrar projetos
function filtrarProjetos(tipo) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if(tipo === 'todos') {
      card.style.display = 'block';
    } else if(card.classList.contains(tipo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
