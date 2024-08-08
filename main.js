import { jogos } from './jogos.js';


// // script.js

// // Obtém os elementos
let modal = document.getElementById("meuModal");
let btn = document.getElementById("abrirModal");
let span = document.getElementsByClassName("close")[0];

//mensagem de sucesso!//mensagem de sucesso!//mensagem de sucesso!
function sucessoMensagem(message) {
  const notification = document.getElementById('success-notification');
  const messageElement = document.getElementById('success-message');
  
  messageElement.textContent = message;
  notification.classList.add('sucesso');
  

  setTimeout(() => {
    notification.classList.remove('sucesso');
  }, 5000);
}

function falhaMensagem(message) {
  const notification = document.getElementById('success-notification');
  const messageElement = document.getElementById('success-message');
  
  messageElement.textContent = message;
  notification.classList.add('erro');
  

  setTimeout(() => {
    notification.classList.remove('erro');
  }, 5000);
}



const menuMobile = document.querySelector('.menu__mobile-lista');
const iconMenu = document.querySelector('.menu__humburguer');

iconMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('menu__mobile-lista-ativo');
  iconMenu.classList.toggle('ativo-bx');
});


document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.querySelector(".carrossel");
  const slides = document.querySelectorAll(".carrossel__item");
  const slides1 = document.querySelectorAll(".carrossel__item-1");

  let index = 0;
  let index1 = 0;

  function showSlide() {
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  function showSlide1() {
    slides1.forEach(slide => {
      slide.style.transform = `translateX(-${index1 * 100}%)`;
    });
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    index1 = (index1 + 1) % slides1.length;
    showSlide1();
    showSlide();
  }, 4000); // Troca de slide a cada 3 segundos (3000 milissegundos)
});



// ===================================================================FUNÇÕES PARA CHAMAR VALIDAR A IDADE DO USUARIO=============================================================================
// ===================================================================FUNÇÕES PARA CHAMAR VALIDAR A IDADE DO USUARIO=============================================================================

document.addEventListener("DOMContentLoaded", function () {
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Obtém o parâmetro 'id' da URL
  const id = parseInt(getParameterByName('id'));


  var dateInput = document.getElementById("data");
  var validaBotao = document.querySelector(".btn__primary");
  var modal = document.getElementById("modalIdade");
  if (modal) {
    var closeBtn = modal.querySelector(".close");
    if (dateInput) {
      dateInput.addEventListener("click", function (event) {
        dateInput.showPicker();
        validaBotao.addEventListener("click", function (event) {
          event.preventDefault();

          // Obtém a data de nascimento do input
          var dataNascimento = new Date(dateInput.value);
          var hoje = new Date();
          var idade = hoje.getFullYear() - dataNascimento.getFullYear();
          var mes = hoje.getMonth() - dataNascimento.getMonth();

          // Verifica se ainda não fez aniversário neste ano
          if (
            mes < 0 ||
            (mes === 0 && hoje.getDate() < dataNascimento.getDate())
          ) {
            idade--;
          }

          // Se for menor que 18 anos, abre o modal
          if (idade < 18) {
            modal.style.display = "block";
          } else {
            // Se for maior ou igual a 18 anos, permite acesso ou exibe outra mensagem
            setTimeout(() => {
              window.location.href = `descricao-jogos.html?id=${id}`;

            }, 600);
            loadLoadingScreen()
          }
        });

        // Fecha o modal se o usuário clicar no botão de fechar
        closeBtn.addEventListener("click", function () {
          modal.style.display = "none";
        });

        // Fecha o modal se o usuário clicar fora da área do modal
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cadastroLink = document.querySelector(".register-link");
  const loginLink = document.querySelector(".login-link");

  if (cadastroLink) {
    cadastroLink.addEventListener("click", () => {
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.add("active");
    });
  }

  if (loginLink) {
    loginLink.addEventListener("click", () => {
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.remove("active");
    });
  }
});

// =========================================================FUNÇÕES PARA CHAMAR O ID DO CARD E TENTAR FAZER A TELA DE LOADING FUNCIONAR=============================================================================
// =========================================================FUNÇÕES PARA CHAMAR O ID DO CARD E TENTAR FAZER A TELA DE LOADING FUNCIONAR=============================================================================

function loadLoadingScreen() {
  fetch("loading.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
      showContentAfterDelay();
    })
    .catch((error) =>
      console.error("Erro ao carregar a tela de carregamento:", error)
    );
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

document.querySelectorAll(".swiper-slide").forEach((element) => {
  element.addEventListener("click", function () {
    const id = this.getAttribute("data-id");
    const idMaior18 = this.getAttribute("data-id-maior18");


    console.log(id);
    console.log(idMaior18);


    // Só verifica se o iudmaior nao esta vazio e nem nulo, se isso for verade, acessa
    if (idMaior18 !== null && idMaior18 !== "") {
      setTimeout(() => {
        window.location.href = `home-maior18.html?id=${idMaior18}`;
      }, 600); // Tempo
      loadLoadingScreen();
    }

    // Só verifica se o id nao esta vazio e nem nulo, se isso for verade, acessa
    if (id !== null && id !== "") {
      setTimeout(() => {
        window.location.href = `descricao-jogos.html?id=${id}`;

      }, 600);
      loadLoadingScreen();
    }

  });
});

// =======================================================================================FIM ID CARD=============================================================================
// =======================================================================================FIM ID CARD=============================================================================

// ===================================================================TRABALHANDO COM CLASS PARA EXIBIR AS INFORMAÇÕES DO GAME=============================================================================


// console.log(jogos)
class Jogo {
  constructor({ nome, imagens, imagem1, imagem2, imagem3, imagem4, descricao, valor, lancamento, desenvolvido,
    sistemaOperacional, processador, memoria, placaVideo, armazenamento, observacoes, requisitos, minimos, recomendados, genero, recurso, classificacaoIndicativa, comentarios, positivos, usuario, comentario, negativo }) {
    this.nome = nome;
    this.imagens = imagens;
    this.imagem1 = imagem1;
    this.imagem2 = imagem2;
    this.imagem3 = imagem3;
    this.imagem4 = imagem4;
    this.descricao = descricao;
    this.valor = parseFloat(valor).toFixed(2);
    this.lancamento = lancamento;
    this.desenvolvido = desenvolvido;
    this.sistemaOperacional = sistemaOperacional;
    this.processador = processador;
    this.memoria = memoria;
    this.placaVideo = placaVideo;
    this.armazenamento = armazenamento;
    this.observacoes = observacoes;
    this.requisitos = requisitos;
    this.minimos = minimos;
    this.recomendados = recomendados;
    this.genero = genero;
    this.recurso = recurso;
    this.classificacaoIndicativa = classificacaoIndicativa;
    this.comentario = comentario;
    this.comentarios = comentarios;
    this.positivos = positivos;
    this.usuario = usuario;
    this.negativo = negativo;

  }

  mostraNomeJogo() {
    const nomeJogo = document.querySelector(".jogo__infos-nome");
    nomeJogo.innerHTML = `${this.nome}`;
    return nomeJogo;
  }
  mostrarImagens() {
    const imagem1 = document.querySelector('#img1');
    if (this.imagens.imagem1) {
      imagem1.src = this.imagens.imagem1;
      imagem1.style.display = 'block'; // Exibe a imagem
    } else {
      imagem1.style.display = 'none'; // Oculta a imagem caso não exista
    }

    const imagem2 = document.querySelector('#img2');
    if (this.imagens.imagem2) {
      imagem2.src = this.imagens.imagem2;
      imagem2.style.display = 'block'; // Exibe a imagem
    } else {
      imagem2.style.display = 'none'; // Oculta a imagem caso não exista
    }

    const imagem3 = document.querySelector('#img3');
    if (this.imagens.imagem3) {
      imagem3.src = this.imagens.imagem3;
      imagem3.style.display = 'block'; // Exibe a imagem
    } else {
      imagem3.style.display = 'none'; // Oculta a imagem caso não exista
    }

    const imagem4 = document.querySelector('#img4');
    if (this.imagens.imagem4) {
      imagem4.src = this.imagens.imagem4;
      imagem4.style.display = 'block'; // Exibe a imagem
    } else {
      imagem4.style.display = 'none'; // Oculta a imagem caso não exista
    }

  }


  mostraDescricaoJogo() {
    const descricaoJogo = document.querySelector(".jogo__infos-descricao");
    descricaoJogo.innerHTML = `${this.descricao}`;
    return descricaoJogo;
  }

  mostraLancamentoJogo() {
    const lancamentoJogo = document.querySelector(".info-vendas-lancamento");
    lancamentoJogo.innerHTML += ` ${this.lancamento}`;
    return lancamentoJogo;
  }

  mostraValorJogo() {
    const valorJogo = document.querySelector(".info-vendas-valor");
    valorJogo.innerHTML += ` ${this.valor}`;
    return valorJogo;
  }

  mostraDesenvolvidoJogo() {
    const desenvolvidoPor = document.querySelector(".info-vendas-desenvolvido");
    desenvolvidoPor.innerHTML += `${this.desenvolvido}`;
    return desenvolvidoPor;
  }

  //REQUISIOS MINIMOS
  //REQUISIOS MINIMOS

  requisitosMinimos() {
    //sistema operacional
    const minSistema = document.querySelector(".sistemaOperacionalMinimo");
    minSistema.innerHTML += `${this.requisitos.minimos.sistemaOperacional}`;

    const recoSistema = document.querySelector(".sistemaOperacionalRecomendado");
    recoSistema.innerHTML += `${this.requisitos.recomendados.sistemaOperacional}`;


    //processador
    const minProcessador = document.querySelector(".processadorMinimo");
    minProcessador.innerHTML += `${this.requisitos.minimos.processador}`;

    const recoProcessador = document.querySelector(".processadorRecomendado");
    recoProcessador.innerHTML += `${this.requisitos.recomendados.processador}`;

    // memoria
    const minMemoria = document.querySelector(".memoriaMinimo");
    minMemoria.innerHTML += `${this.requisitos.minimos.memoria}`;

    const recoMemoria = document.querySelector(".memoriaRecomendado");
    recoMemoria.innerHTML += `${this.requisitos.recomendados.memoria}`;

    // Placa de Vídeo
    const minPlacaVideo = document.querySelector(".placaDeVideoMinimo");
    minPlacaVideo.innerHTML += `${this.requisitos.minimos.placaVideo}`;

    const recoPlacaVideo = document.querySelector(".placaDeVideoRecomendado");
    recoPlacaVideo.innerHTML += `${this.requisitos.recomendados.placaVideo}`;

    // Armazenamento
    const minArmazenamento = document.querySelector(".ArmazenamentoMinimo");
    minArmazenamento.innerHTML += `${this.requisitos.minimos.armazenamento}`;

    const recoArmazenamento = document.querySelector(".ArmazenamentoRecomendado");
    recoArmazenamento.innerHTML += `${this.requisitos.recomendados.armazenamento}`;



  }
  mostrarGeneroERecurso() {
    const genero = document.querySelector(".info-genero");
    genero.innerHTML += `${this.genero}`;

    const recurso = document.querySelector(".info-recurso");
    recurso.innerHTML += `${this.recurso}`;

  }

  mostraClassificacaoIndicativa() {
    const idade = document.querySelector(".idade__jogar");
    const idadeInformacao = document.querySelector(".idade__informacao");
    idade.innerHTML += `${this.classificacaoIndicativa}`;

    switch (this.classificacaoIndicativa) {
      case 18:
        idade.classList.add("mais18");
        idadeInformacao.innerHTML += 'Violência Extrema';
        break;
      case 16:
        idade.classList.add("mais16");
        idadeInformacao.innerHTML += `Linguagem imprópria, <br> temas sensíveis e violência`
        break;
      case 14:
        idade.classList.add("mais14");
        idadeInformacao.innerHTML += `Temas sensíveis e violência`
        break;
      case 12:
        idade.classList.add("mais12");
        idadeInformacao.innerHTML += `Violência e conteúdo sexual`
        break;
      case "L":
        idade.classList.add("livre");
        idadeInformacao.innerHTML += `Livre`
        break;
    }
  }

  mostrarComentario() {
    const usuario = document.querySelector('#nome-coment');
    const comentario = document.querySelector('.comentario');
    usuario.innerHTML += `${this.comentarios.positivos.usuario}`;
    comentario.innerHTML += `${this.comentarios.positivos.comentario}`;

    const usuarioNegativo = document.querySelector('#nome-coment1');
    const comentarioNegativo = document.querySelector('.comentarioNegativo');
    usuarioNegativo.innerHTML += `${this.comentarios.negativos.usuario}`;
    comentarioNegativo.innerHTML += `${this.comentarios.negativos.comentario}`;
  }


  // MODAL MODAL MODAL  MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL

  mostraNomeJogoModal() {
    const nomeJogoModal = document.querySelector(".modal-name");
    nomeJogoModal.innerHTML = `${this.nome}`;
    return nomeJogoModal;
  }

  mostraProdutoraGameModal() {
    const produtoraGameModal = document.querySelector(".modal-developement");
    produtoraGameModal.innerHTML = `${this.desenvolvido}`;
    return produtoraGameModal;
  }

  precoGameModal() {
    const precoGameModal = document.querySelector('.modal-price-value');
    precoGameModal.innerHTML = `R$ ${this.valor}`;
    return precoGameModal;
  }

  descontoGameModal() {
    const descontoGameModal = document.querySelector('.modal-desconto-value');
    const mensagens = document.getElementsByClassName('mensagemSuccess');
    const randomValue = Math.floor(Math.random() * 10) + 1;
    const botaoPromocional = document.querySelector('#botaoPromocional');
    const codigoPromocional = document.querySelector('#codigoPromocional');
    const cuponsUsados = [];

    descontoGameModal.innerHTML = `${parseInt(randomValue)}%`;

    const totalGameModal = document.querySelector('.modal-total-value');
    let valorGame = parseInt(this.valor);
    let total = (valorGame - (valorGame * randomValue) / 100);
    console.log(total);
    totalGameModal.innerHTML = `R$ ${total}`;

    if (botaoPromocional) {
      botaoPromocional.addEventListener('click', () => {
        const mensagens = document.getElementsByClassName('mensagemSuccess');
    
        if (mensagens.length > 0) {
          const mensagem = mensagens[0];
         
    
          const codigo = codigoPromocional.value.toUpperCase();
    
          if (codigo === '') {
            falhaMensagem("Por favor, insira um código promocional.");
          } else if (cuponsUsados.includes(codigo)) {
            falhaMensagem("Este código promocional já foi usado.");
          } else if (codigo === "CODERGAME") {
            let valorNovo = randomValue + 5;
            console.log('Desconto antigo', randomValue);
            console.log('Desconto novo', valorNovo);
    
            descontoGameModal.innerHTML = `${valorNovo}%`;
            let total = (valorGame - (valorGame * valorNovo) / 100);
            totalGameModal.innerHTML = `R$ ${total}`;
            cuponsUsados.push(codigo);
            sucessoMensagem("Código promocional de 5% aplicado com sucesso!");
            codigoPromocional.value = "";
          } else {
            falhaMensagem("Código promocional inválido.");
            codigoPromocional.value = "";
          }
        }
      });
    }
    

    //blindagem pra quando abrir o modal, ele limpar o campo
    const mensagem = mensagens[0];
    mensagem.textContent = "";

  }

  descricaoGameModal() {
    const descontoGameModal = document.querySelector('.modal-descricao-game');
    descontoGameModal.innerHTML = `${this.descricao}`;
  }

  imagemGameModal() {
    const imagemGameModal = document.querySelector('.modal-imagem');
    imagemGameModal.src = this.imagens.imagem3;


  }


}





// Função para obter o valor de um parâmetro da URL
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Obtém o parâmetro 'id' da URL
const idGame = getParameterByName('id');
if (idGame) {
  const idGameInt = parseInt(idGame, 10);
  console.log(`ID do jogo obtido: ${idGameInt}`);


  function exibirDetalhesDoJogo(idGame) {
    // console.log(`ID do jogo para exibir detalhes: ${idGame}`);
    const jogo = jogos.find(jogo => jogo.id === idGame);

    if (jogo) {
      const jogoInstanciado = new Jogo(jogo);
      jogoInstanciado.mostraNomeJogo();
      jogoInstanciado.mostrarImagens();
      jogoInstanciado.mostraDescricaoJogo();
      jogoInstanciado.mostraLancamentoJogo();
      jogoInstanciado.mostraValorJogo();
      jogoInstanciado.mostraDesenvolvidoJogo();
      jogoInstanciado.requisitosMinimos();
      jogoInstanciado.mostrarGeneroERecurso();
      jogoInstanciado.mostraClassificacaoIndicativa();
      jogoInstanciado.mostrarComentario();
    } else {
      console.log('Jogo não encontrado.');
    }
  }


  exibirDetalhesDoJogo(idGameInt);
}

ScrollReveal().reveal('.swiper', {
  origin: 'left',
  duration: 1000,
  distance: '20%'
});




function infoModalGame() {
  const idGameModal = getParameterByName('id');
  const idGameIntModal = parseInt(idGameModal, 10);

  const jogo = jogos.find(jogo => jogo.id === idGameIntModal);
  // console.log(jogo);
  if (jogo) {
    const jogoInstanciadoModal = new Jogo(jogo);
    jogoInstanciadoModal.mostraNomeJogoModal();
    jogoInstanciadoModal.precoGameModal();
    jogoInstanciadoModal.descontoGameModal();
    jogoInstanciadoModal.descricaoGameModal();
    jogoInstanciadoModal.imagemGameModal();

  }

}


if (btn) {
  btn.onclick = function () {
    modal.classList.add("show");
    infoModalGame(); // funcao que chama a informação do game
    selecionarPagamento(); // funcao que seleciona a forma de pagamento


  }
  span.onclick = function () {
    modal.classList.remove("show");
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  }

}


//Funcao do clicque da forma de pagamento


let selecionarPagamento = () => {
  const modalPayment = document.getElementsByClassName('modal-button');
  const botaoFinalizarVenda = document.getElementById('comprar');

  if (botaoFinalizarVenda) {
    botaoFinalizarVenda.addEventListener('click', () => {
      let formaDePagamentoAtiva = false;
  
      Array.from(modalPayment).forEach(e => {
        if (e.classList.contains('active')) {
          formaDePagamentoAtiva = true;
        }
      });
  
      if (formaDePagamentoAtiva) {
        sucessoMensagem('Operação realizada com sucesso!');
      } else {
        falhaMensagem('Por favor, selecione uma forma de pagamento!');
      }
    });
  }
  

  Array.from(modalPayment).forEach(e => {

    e.addEventListener('click', botao => {
      Array.from(modalPayment).forEach(botao => {
        botao.classList.remove('active');
      })

      botao.target.classList.add('active');
    });
  });

}

