

  // ====================AQUI COMEÇA O LOADING AO CLICAR NO BOTÃO SingUp ====================
  let SingUp = document.getElementById('SingUp');

  if (SingUp) {
    SingUp.addEventListener('click', () => {
      setTimeout(() => {
        window.location.href = "./login.html";
      }, 600); // Tempo
      loadLoadingScreen();
    });
  }
  // ====================AQUI TERMINA O LOADING AO CLICAR NO BOTÃO SingUp ====================


   // ====================AQUI COMEÇA O LOADING AO CLICAR NO BOTÃO BOTAOHOME ====================
  let botaoHome = document.getElementById('botaoHome')
  if(botaoHome) {
    botaoHome.addEventListener('click', () => {
        setTimeout(() => {
          window.location.href = "./index.html";
        }, 600); // Tempo
        loadLoadingScreen();
      });
    }
   // ====================AQUI TERMINA  O LOADING AO CLICAR NO BOTÃO BOTAOHOME ====================

     // ====================AQUI COMEÇA O LOADING AO CLICAR NO BOTÃO SOBRENOS ====================
  let botaoSobrenos = document.getElementById('botaoSobrenos')
  if(botaoSobrenos) {
    botaoSobrenos.addEventListener('click', () => {
        setTimeout(() => {
          window.location.href = "./home-sobrenos.html";
        }, 600); // Tempo
        loadLoadingScreen();
      });
    }
   // ====================AQUI TERMINA  O LOADING AO CLICAR NO BOTÃO SOBRENOS ====================


  // ====================FUNÇÃO PRINCIPAL PARA CHAMAR O ARQUIVO HTML DE LOADING ====================
  function loadLoadingScreen() {
    fetch('loading.html')
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
        showContentAfterDelay();
      })
      .catch(error => console.error('Erro ao carregar a tela de carregamento:', error));
  }



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
    }, 1000); // 1 segundo de atraso
  }
  
  // ====================AQUI TERMINA A FUNÇÃO PRINCIPAL PARA CHAMAR O ARQUIVO HTML DE LOADING ====================






