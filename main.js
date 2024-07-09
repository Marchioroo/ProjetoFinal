document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel__item");

  let index = 0;

  function showSlide() {
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide();
  }, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
});



// ===================================================================FUNÇÕES PARA CHAMAR VALIDAR A IDADE DO USUARIO=============================================================================
// ===================================================================FUNÇÕES PARA CHAMAR VALIDAR A IDADE DO USUARIO=============================================================================
document.addEventListener("DOMContentLoaded", function () {
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
              window.location.href = "./descricao-jogos.html";
            }, 600);
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

    // Só verifica se o iudmaior nao esta vazio e nem nulo, se isso for verade, acessa
    if (idMaior18 !== null && idMaior18 !== "") {
      setTimeout(() => {
        window.location.href = "home-maior18.html";
      }, 600); // Tempo
      loadLoadingScreen();
    }

    // Só verifica se o id nao esta vazio e nem nulo, se isso for verade, acessa
    if (id !== null && id !== "") {
      setTimeout(() => {
        window.location.href = "descricao-jogos.html";
      }, 600); // Tempo
      loadLoadingScreen();
    }
  });
});

// =======================================================================================FIM ID CARD=============================================================================
// =======================================================================================FIM ID CARD=============================================================================

// ===================================================================TRABALHANDO COM CLASS PARA EXIBIR AS INFORMAÇÕES DO GAME=============================================================================

const jogos = [
  {
    id: 1,
    nome: "Dead By Daylight",
    imagens: {
      imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
      imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
      imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
      imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
    },
    descricao: `A morte não é uma saída.<br>Dead by Daylight é um jogo de horror multijogadores (4x1) em que um dos jogadores assume o papel do Assassino enquanto os outros quatro jogam como Sobreviventes, tentando fugir do Assassino para não serem pegos, torturados e assassinados.<br><br>Os sobreviventes jogam em terceira pessoa e têm como vantagem uma melhor percepção da situação. O Assassino joga em primeira pessoa e fica mais concentrado na presa.<br><br>A cada encontro, o objetivo dos Sobreviventes é fugir do Território de Abate sem ser pego pelo Assassino. Isso é mais difícil do que parece – ainda mais em um cenário que muda a cada partida.`,
    valor: 59.99,
    lancamento: "01/01/2020",
    desenvolvido: "Bungie",
    requisitos: {
      minimos: {
        sistemaOperacional: "Windows 10 64-bit",
        processador: "Intel Core i3-4170 ou AMD FX-8120",
        memoria: "8 GB de RAM",
        placaVideo: "GeForce GTX 460 1GB ou AMD HD 6850 1GB",
        directX: "Versão 11",
        rede: "Conexão de Internet banda larga",
        armazenamento: "50 GB de espaço disponível",
        placaSom: "Compatível com DX11",
    
      },
      recomendados: {
        sistemaOperacional: "Windows 10 64-bit",
        processador: "Intel Core i3-4170 ou AMD FX-8300 ou Superior",
        memoria: "8 GB de RAM",
        placaVideo: "GeForce 760 ou AMD HD 8800 ou Superior",
        directX: "Versão 11",
        rede: "Conexão de Internet banda larga",
        armazenamento: "50 GB de espaço disponível",
        placaSom: "Compatível com DX11"
      }
    }
  },
  {
    id: 2,
    nome: "Outro Jogo",
    imagens: {
      imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
      imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
      imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
      imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
    },
    descricao: "Descrição do outro jogo.",
    valor: 59.99,
    lancamento: "15/03/2023",
    desenvolvido: "Desenvolvedora B",
    requisitos: {
      minimos: {
        sistemaOperacional: "Windows 10 64-bit2",
        processador: "Intel Core i5-8400 ou AMD Ryzen 5 1600",
        memoria: "16 GB de RAM",
        placaVideo: "NVIDIA GeForce GTX 970 4GB ",
        armazenamento: "100 GB de espaço disponível",
      },
      recomendados: {
        sistemaOperacional: "Windows 10 64-bit",
        processador: "Intel Core i7-8700K ou AMD Ryzen 7 2700X",
        memoria: "16 GB de RAM",
        placaVideo: "NVIDIA GeForce RTX 2080 Ti Superior",
        directX: "Versão 12",
        rede: "Conexão de Internet banda larga",
        armazenamento: "100 GB de espaço disponível",
        placaSom: "Compatível com DirectX"
      }
    }
  }
];




class Jogo {
  constructor({ nome, imagens, imagem1, imagem2, imagem3, imagem4, descricao, valor, lancamento, desenvolvido, sistemaOperacional, processador, memoria, placaVideo, armazenamento, observacoes, requisitos, minimos, recomendados }) {
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

    // Observações
    const observacoes = document.querySelector(".observacoes");
    observacoes.innerHTML += `${this.requisitos.minimos.observacoes}`;

  }

}

function exibirDetalhesDoJogo(id) {
  const jogo = jogos.find(jogo => jogo.id === id);
  //copiado do que a professora passou
  if (jogo) {
    const jogoInstanciado = new Jogo(jogo);
    jogoInstanciado.mostraNomeJogo();
    jogoInstanciado.mostrarImagens();
    jogoInstanciado.mostraDescricaoJogo();
    jogoInstanciado.mostraLancamentoJogo();
    jogoInstanciado.mostraValorJogo();
    jogoInstanciado.mostraDesenvolvidoJogo();
    jogoInstanciado.requisitosMinimos();
  } else {
    console.log('Jogo não encontrado.');
  }
}

exibirDetalhesDoJogo(1);

