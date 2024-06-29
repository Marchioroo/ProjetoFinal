// ====================Aqui chama o LOADING ao clicar no botão  ENTRAR! ====================

document.addEventListener("DOMContentLoaded", function () {
  function loadLoadingScreen() {
    fetch('loading.html')
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
        showContentAfterDelay();
      })
      .catch(error => console.error('Erro ao carregar a tela de carregamento:', error));
  }


  let SingUp = document.getElementById('SingUp');
  SingUp.addEventListener('click', () => {
    console.log('oi');

    // Redireciona para a página de login após um certo tempo (exemplo de 2 segundos)
    setTimeout(() => {
      window.location.href = "./login.html"; // Substitua com o caminho correto da página login.html
    }, 600); // Tempo em milissegundos 
    loadLoadingScreen();
  });


  function showContentAfterDelay() {


    setTimeout(function () {
      var loadingScreen = document.getElementById("loading-screen");
      var content = document.getElementById("content-loading");

      if (loadingScreen) {
        loadingScreen.style.display = "none";
      }

      if (content) {
        content.style.display = "block";
      }
    }, 1000); // 3 segundos de atraso


  }

});
// ====================Aqui TERMINA o LOADING ao clicar no botão  ENTRAR! ====================