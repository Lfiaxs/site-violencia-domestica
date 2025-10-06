document.addEventListener('DOMContentLoaded', () => {

  // ------------------- Carrossel -------------------
  const fotos = [
    "Imagens/image12.png",
    "Imagens/image13.png",
    "Imagens/image14.png",
    "Imagens/image15.png",
    "Imagens/image16.png",
    "Imagens/image17.png",
    "Imagens/image18.png",
    "Imagens/image19.png",
    "Imagens/image20.png",
    "Imagens/image21.png",
    "Imagens/image22.png",
    "Imagens/image23.png",
    "Imagens/image24.png"
  ];

  const slidesContainer = document.querySelector('.slides');
  const dotsContainer = document.querySelector('.dots');

  if (slidesContainer && dotsContainer) { // verifica se existe carrossel na página
    fotos.forEach((foto, i) => {
      const img = document.createElement('img');
      img.src = foto;
      img.alt = `Foto ${i+1} do CRAS`;
      slidesContainer.appendChild(img);

      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
      });
      dotsContainer.appendChild(dot);
    });

    const images = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
      if (i >= images.length) index = 0;
      if (i < 0) index = images.length - 1;
      slidesContainer.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', () => {
      index++;
      showSlide(index);
    });

    document.querySelector('.prev').addEventListener('click', () => {
      index--;
      showSlide(index);
    });
  }

  // ------------------- Botão de alerta -------------------
  const botao = document.getElementById('botao-alerta');
  if (botao) { // só adiciona se o botão existir
    botao.addEventListener('click', () => {
      const numeroWhats = '553899435656';
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        // celular: liga para 190
        window.location.href = 'tel:190';
      } else {
        // PC: abre WhatsApp Web
        window.open(`https://wa.me/${numeroWhats}`, '_blank');
      }
    });
  }

});
