document.addEventListener('DOMContentLoaded', () => {

  // ------------------- Carrossel -------------------
  const fotos = [
    "imagens/image12.png",
    "imagens/image13.png",
    "imagens/image14.png",
    "imagens/image15.png",
    "imagens/image16.png",
    "imagens/image17.png",
    "imagens/image18.png",
    "imagens/image19.png",
    "imagens/image20.png",
    "imagens/image21.png",
    "imagens/image22.png",
    "imagens/image23.png",
    "imagens/image24.png",
    "imagens/image25.png",
    "imagens/image26.png",
    "imagens/image27.png",
    "imagens/image28.png",
    "imagens/image29.png",
    "imagens/image30.png",
    "imagens/image31.png",
    "imagens/image32.png",
    "imagens/image33.png",
    "imagens/image34.png",
    "imagens/image35.png",
    "imagens/image36.png",
    "imagens/image37.png",
    "imagens/image38.png",
    "imagens/image39.png",
    "imagens/image40.png",
    "imagens/image41.png",
    "imagens/image42.png",
    "imagens/image43.png",
    "imagens/image44.png",
    "imagens/image45.png",
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
