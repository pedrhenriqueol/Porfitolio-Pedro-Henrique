document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contato form"),
        nome = form.name,
        email = form.email,
        mensagem = form.message,
        header = document.querySelector("header"),
        imagens = document.querySelectorAll(".scroll-image");

  form.addEventListener("submit", e => {
    if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos antes de enviar.");
    }
  });

  const fixNavbar = () =>
    header.classList.toggle("fixed-navbar", window.scrollY > 0);

  const aplicarOpacidade = () =>
    imagens.forEach(img =>
      img.style.opacity = img.getBoundingClientRect().top < window.innerHeight ? "1" : "0"
    );

  window.addEventListener("scroll", () => {
    fixNavbar();
    aplicarOpacidade();
  });

  fixNavbar();
  aplicarOpacidade();
});

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
});

// Função para verificar se o elemento está visível na tela
function checkVisibility() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();

    // Verifica se o elemento está dentro da área visível da tela
    if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
      // Aplique a classe 'visible' para animar a opacidade
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 100); // Delay baseado no índice do elemento, garantindo a ordem
    } else {
      // Remover a classe 'visible' se o elemento não estiver visível
      element.classList.remove('visible');
    }
  });
}

// Chama a função quando o usuário rolar a página
window.addEventListener('scroll', checkVisibility);

// Chama a função ao carregar a página para já aplicar o efeito nos elementos visíveis
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
  checkVisibility(); // Chama a função para já aplicar a visibilidade no carregamento
});
