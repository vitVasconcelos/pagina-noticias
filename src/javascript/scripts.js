function trocarImagem() {
    const foto = document.getElementById('foto');
    if (window.innerWidth <= 450) {
      foto.src = "./src/imagens/image-web-3-mobile.jpg";
    } else {
      foto.src = "./src/imagens/image-web-3-desktop.jpg";
    }
  }
  
  function exibirMenuIcon() {
    const icon = document.getElementById('menu-icon');

    if (window.innerWidth <= 450) {
      icon.style.display = 'block';
  
    } else {
      icon.style.display = 'none';
    }
  }
  
  function controlarMenuLateral() {
    const menuIcon = document.getElementById('menu-icon');
    const menuLateral = document.getElementById('menu-lateral');
    const fecharIcon = document.getElementById('fechar-menu');
  
    menuIcon.addEventListener('click', () => {
      menuLateral.classList.add('ativo');
    });
  
    fecharIcon.addEventListener('click', () => {
      menuLateral.classList.remove('ativo');
    });
  }
  
  window.addEventListener("load", () => {
    trocarImagem();
    exibirMenuIcon();
    controlarMenuLateral();
  });
  
  window.addEventListener("resize", () => {
    trocarImagem();
    exibirMenuIcon();
  });
  