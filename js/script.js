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

