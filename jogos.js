export const jogos = [
    //Dead By Daylight
    {
        id: 1,
        nome: "Dead By Daylight",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/DeadBy/deadby1.jpg",
            imagem2: "./images/imagens-descricao-jogos/DeadBy/deadby2.jpg",
            imagem3: "./images/imagens-descricao-jogos/DeadBy/deadby3.jpg",
            imagem4: "./images/imagens-descricao-jogos/DeadBy/deadby4.jpg",
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
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                    usuario: "Marchioro",
                    comentario: "Eu achei esse jogo muito legal e bem top. Os gráficos são incríveis e a jogabilidade é muito intuitiva. Recomendo para todos os meus amigos!"
                },

            negativos:{
                usuario:"Luanna",
                comentario: "Eu achei esse jogo muito merda. A interface é confusa e os controles não respondem bem. Além disso, o jogo trava frequentemente, tornando a experiência frustrante."
            }
        }

    },
    //Black Myth: Wukong
    {
        id: 2,
        nome: "Black Myth: Wukong",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong1.jpg",
            imagem2: "./images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong2.jpeg",
            imagem3: "./images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong3.jpeg",
            imagem4: "./images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong4.jpg",
        },
        descricao: 'Wukong é um jogo de ação e aventura desenvolvido pela Game Science, baseado no clássico romance chinês "Jornada ao Oeste". O jogador assume o papel de Sun Wukong, o Rei Macaco, e utiliza suas habilidades e transformações para combater inimigos e explorar um mundo fantástico repleto de mitologia chinesa. O jogo é conhecido por seus gráficos impressionantes e combates dinâmicos.',
        valor: 299.90,
        lancamento: "19/08/2024",
        desenvolvido: "Game Science",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows 10 64-bit",
                processador: "Intel Core i5-8400 / AMD Ryzen 5 1600",
                memoria: "16 GB de RAM",
                placaVideo: " NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
                armazenamento: " 130 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows 10 64-bit",
                processador: "Intel Core i7-9700 / AMD Ryzen 5 5500",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / INTEL Arc A750",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "130 GB de espaço disponível",
                placaSom: "Windows Compatible Audio Device"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "AnaSilva",
                comentario: "O jogo é incrível e super divertido! As missões são bem elaboradas e os personagens têm personalidades únicas. Não consigo parar de jogar!"
            },

            negativos:{
                usuario: "PauloSilva",
            comentario: "O jogo tem muitos bugs e erros. Toda vez que tento avançar para o próximo nível, algo dá errado e preciso reiniciar. Muito decepcionante."
            }
        }
    },
    //Final Fantasy 14: Dawntrail
    {
        id: 3,
        nome: "Final Fantasy 14: Dawntrail",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/FinalFantasy14Dawntrail/FinalFantasy14Dawntrail1.jpg",
            imagem2: "./images/imagens-descricao-jogos/FinalFantasy14Dawntrail/FinalFantasy14Dawntrail2.jpg",
            imagem3: "./images/imagens-descricao-jogos/FinalFantasy14Dawntrail/FinalFantasy14Dawntrail3.jpg",
            imagem4: "./images/imagens-descricao-jogos/FinalFantasy14Dawntrail/FinalFantasy14Dawntrail4.jpg",
        },
        descricao: 'É a mais recente expansão do popular MMORPG Final Fantasy XIV. Esta expansão leva os jogadores a novas áreas, introduz novas classes e ofícios, e continua a rica narrativa que a série é conhecida. Os jogadores irão explorar terras exóticas, enfrentar novos desafios e descobrir segredos antigos enquanto trabalham juntos para salvar o reino.',
        valor: 107.99,
        lancamento: "02/07/2024",
        desenvolvido: "Square Enix",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows 10 64-bit",
                processador: "Intel® Core™i7-7700 or higher",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 970 or higher, AMD Radeon RX 480 or higher",
                armazenamento: "140 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit, Windows® 11 64 bit",
                processador: "Intel® Core™i7-9700 or higher",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce RTX 2060 or higher, AMD Radeon RX 5600 XT or higher",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "140 GB de espaço disponível",
                placaSom: "DirectSound® supported sound card"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        recurso: "Online Multiplayer",
        comentarios:{
            positivos: { 
                   usuario: "CarlosSouza",
            comentario: "Gostei muito dos gráficos e da jogabilidade. A história é envolvente e as batalhas são desafiadoras. Vale cada minuto investido."
            },

            negativos:{
                usuario: "MariaSouza",
            comentario: "Os gráficos são muito fracos. Esperava algo mais detalhado e realista. Parece que estou jogando um jogo de dez anos atrás."
            }
        }
    },
    //World of warcraft war within
    {
        id: 4,
        nome: "World of Warcraft War Within",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/WorldOfWarcraftWarWithin/WorldOfWarcraftWarWithin1.jpg",
            imagem2: "./images/imagens-descricao-jogos/WorldOfWarcraftWarWithin/WorldOfWarcraftWarWithin2.jpg",
            imagem3: "./images/imagens-descricao-jogos/WorldOfWarcraftWarWithin/WorldOfWarcraftWarWithin3.jpg",
            imagem4: "./images/imagens-descricao-jogos/WorldOfWarcraftWarWithin/WorldOfWarcraftWarWithin4.jpg",
        },
        descricao: 'É a mais recente expansão do popular MMORPG Final Fantasy XIV. Esta expansão leva os jogadores a novas áreas, introduz novas classes e ofícios, e continua a rica narrativa que a série é conhecida. Os jogadores irão explorar terras exóticas, enfrentar novos desafios e descobrir segredos antigos enquanto trabalham juntos para salvar o reino.',
        valor: 319.00,
        lancamento: "26/08/2024",
        desenvolvido: "Blizzard Entertainment",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows 10 64-bit",
                processador: "Intel Core i5-3450 / AMD FX 8300",
                memoria: "4 GB de RAM (8 GB se usar gráficos integrados)",
                placaVideo: "NVIDIA GeForce GTX 760 / AMD Radeon RX 560 / Intel UHD 630 (45W)",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-6700K / AMD Ryzen 7 2700X",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1080 / AMD Radeon RX Vega 64",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
                usuario: "MarianaLima",
            comentario: "A história do jogo é cativante e envolvente. Cada missão revela mais sobre o universo do jogo e os personagens. Estou ansiosa para ver o que acontece a seguir."
            },

            negativos:{
              usuario: "LucasFerreira",
            comentario: "A história do jogo é muito chata. Não consegui me conectar com os personagens e a trama parece forçada. Esperava mais."
            }
        }
    
    },
    //The legend of zelda: echoes
    {
        id: 5,
        nome: "The Legend of Zelda: Echoes",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/TheLegendOfZeldaEchoes/TheLegendOfZeldaEchoes1.jpg",
            imagem2: "./images/imagens-descricao-jogos/TheLegendOfZeldaEchoes/TheLegendOfZeldaEchoes2.jpg",
            imagem3: "./images/imagens-descricao-jogos/TheLegendOfZeldaEchoes/TheLegendOfZeldaEchoes3.jpg",
            imagem4: "./images/imagens-descricao-jogos/TheLegendOfZeldaEchoes/TheLegendOfZeldaEchoes4.jpg",
        },
        descricao: 'The Legend of Zelda: Echoes é um novo capítulo na aclamada série de jogos The Legend of Zelda. Nesta aventura, Link explora um mundo vasto e interconectado cheio de mistérios, puzzles e inimigos formidáveis. O jogo introduz novos elementos de jogabilidade e uma narrativa rica que se aprofunda na história de Hyrule e seus personagens icônicos. Com gráficos impressionantes e trilha sonora épica, Echoes promete ser uma experiência inesquecível para os fãs da franquia.',
        valor: 229.90,
        lancamento: "26/09/2024",
        desenvolvido: "Nintendo",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows 10 64-bit",
                processador: "Intel Core i5-3450 / AMD FX 8300",
                memoria: "4 GB de RAM (8 GB se usar gráficos integrados)",
                placaVideo: "NVIDIA GeForce GTX 760 / AMD Radeon RX 560 / Intel UHD 630 (45W)",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-6700K / AMD Ryzen 7 2700X",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1080 / AMD Radeon RX Vega 64",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
                usuario: "MarianaLima",
            comentario: "A história do jogo é cativante e envolvente. Cada missão revela mais sobre o universo do jogo e os personagens. Estou ansiosa para ver o que acontece a seguir."
            },

            negativos:{
              usuario: "LucasFerreira",
            comentario: "A história do jogo é muito chata. Não consegui me conectar com os personagens e a trama parece forçada. Esperava mais."
            }
        }
    
    },
    //Dragon Ball: Sparking! Zero
    {
        id: 6,
        nome: "Dragon Ball: Sparking! Zero",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/DragonBallSparkingZero/DragonBallSparkingZero1.jpg",
            imagem2: "./images/imagens-descricao-jogos/DragonBallSparkingZero/DragonBallSparkingZero2.jpg",
            imagem3: "./images/imagens-descricao-jogos/DragonBallSparkingZero/DragonBallSparkingZero3.jpg",
            imagem4: "./images/imagens-descricao-jogos/DragonBallSparkingZero/DragonBallSparkingZero4.jpg",
        },
        descricao: 'Dragon Ball: Sparking! Zero é um jogo de luta baseado na popular franquia Dragon Ball. O jogo apresenta uma grande variedade de personagens jogáveis, cada um com suas habilidades e movimentos especiais. Os jogadores podem reviver as icônicas batalhas do anime e do mangá em ambientes 3D detalhados. O jogo é conhecido por sua jogabilidade dinâmica, gráficos vibrantes e fidelidade ao material original, proporcionando uma experiência imersiva para os fãs da série.',
        valor: 229.90,
        lancamento: "10/10/2024",
        desenvolvido: "Bandai Namco Entertainment",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-2400 ou AMD FX-6300",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 660 ou AMD Radeon HD 7870",
                armazenamento: "40 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-3770 ou AMD Ryzen 5 1600",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1060 ou AMD Radeon RX 580",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "40 GB de espaço disponível",
                placaSom: "Compatível com DirectX 11"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
                usuario: "FernandaGomes",
            comentario: "A trilha sonora do jogo é fantástica! Cada música combina perfeitamente com a atmosfera das diferentes fases. Realmente imersivo."
            },

            negativos:{
                usuario: "JoanaLima",
            comentario: "Achei o jogo muito repetitivo. Depois de algumas horas, parece que estou fazendo as mesmas coisas repetidamente. Faltam novidades."
            }
        }
    },
    //Call of Duty: Black Ops 6
    {
        id: 7,
        nome: "Call of Duty: Black Ops 6",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/CallofDutyBlackOps6/CODBOps6-1.jpg",
            imagem2: "./images/imagens-descricao-jogos/CallofDutyBlackOps6/CODBOps6-2.jpg",
            imagem3: "./images/imagens-descricao-jogos/CallofDutyBlackOps6/CODBOps6-3.jpeg",
            imagem4: "./images/imagens-descricao-jogos/CallofDutyBlackOps6/CODBOps6-4.jpg",
        },
        descricao: 'Call of Duty: Black Ops 6 é a mais recente entrada na famosa série de jogos de tiro em primeira pessoa. Desenvolvido pela Treyarch e publicado pela Activision, o jogo continua a tradição de combates intensos, narrativas envolventes e modos multijogador variados. O jogo traz uma campanha emocionante que explora novos conflitos globais e intrigas políticas, modos multijogador inovadores e um modo zumbis cheio de ação.',
        valor: 479.00,
        lancamento: "25/10/2024",
        desenvolvido: "Treyarch",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i3-4340 ou AMD FX-6300",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 ou Radeon HD 7950",
                armazenamento: "175 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i5-2500K ou AMD Ryzen R5 1600X",
                memoria: "12 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 970 / GTX 1660 Super ou Radeon R9 390 / RX 580",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "175 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "JoaoFerreira",
            comentario: "O suporte ao cliente é muito eficiente. Tive um problema e ele foi resolvido rapidamente. A equipe é muito atenciosa e prestativa."
            },

            negativos:{
                usuario: "RicardoGomes",
            comentario: "O suporte ao cliente é péssimo. Demoraram dias para responder ao meu problema e, quando responderam, não ofereceram uma solução adequada."
            }
        }
    },
    //Super Mario Party Jamboree
    {
        id: 8,
        nome: "Super Mario Party Jamboree",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/SuperMarioPartyJamboree/SMPJamboree1.jpg",
            imagem2: "./images/imagens-descricao-jogos/SuperMarioPartyJamboree/SMPJamboree2.png",
            imagem3: "./images/imagens-descricao-jogos/SuperMarioPartyJamboree/SMPJamboree3.jpg",
            imagem4: "./images/imagens-descricao-jogos/SuperMarioPartyJamboree/SMPJamboree4.jpg",
        },
        descricao: 'Super Mario Party Jamboree é a mais nova edição da popular série de jogos de festa da Nintendo. O jogo apresenta uma variedade de minijogos divertidos e competitivos, com novos tabuleiros e modos de jogo para entreter jogadores de todas as idades. Os jogadores podem escolher entre uma ampla seleção de personagens icônicos do universo Mario e competir em desafios que testam habilidades, sorte e estratégia. Com gráficos coloridos, música animada e a opção de jogar com amigos localmente ou online, Super Mario Party Jamboree promete ser uma experiência de festa imperdível.',
        valor: 299.90,
        lancamento: "17/10/2024",
        desenvolvido: "Nintendo",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i3-4340 ou AMD FX-6300",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 ou Radeon HD 7950",
                armazenamento: "175 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i5-2500K ou AMD Ryzen R5 1600X",
                memoria: "12 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 970 / GTX 1660 Super ou Radeon R9 390 / RX 580",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "175 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
               usuario: "BrunaMartins",
            comentario: "As atualizações constantes mantêm o jogo interessante. Sempre há algo novo para explorar e desafios para enfrentar. Adoro essa dedicação dos desenvolvedores."
            },

            negativos:{
                 usuario: "BeatrizMartins",
            comentario: "As atualizações estragam o jogo. Toda vez que sai uma nova versão, surgem mais bugs e problemas. Prefiro como era antes."
            }
        }
    },
    //Life is Strange: Double Exposure
    {
        id: 9,
        nome: "Life is Strange: Double Exposure",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/LifeIsStrangeDoubleExposure/LISDE1.jpg",
            imagem2: "./images/imagens-descricao-jogos/LifeIsStrangeDoubleExposure/LISDE2.jpg",
            imagem3: "./images/imagens-descricao-jogos/LifeIsStrangeDoubleExposure/LISDE3.png",
            imagem4: "./images/imagens-descricao-jogos/LifeIsStrangeDoubleExposure/LISDE4.jpeg",
        },
        descricao: 'Life is Strange: Double Exposure é um jogo de aventura narrativa desenvolvido pela Dontnod Entertainment e publicado pela Square Enix. Este novo título da série continua a explorar temas profundos e emocionais, com foco nas escolhas do jogador e suas consequências. A história gira em torno de novos personagens que possuem habilidades especiais que permitem manipular o tempo e o espaço, adicionando uma camada única de jogabilidade e narrativa. Os jogadores deverão tomar decisões difíceis que influenciam a direção da trama e o destino dos personagens, em uma experiência imersiva e visualmente cativante.',
        valor: 219.90,
        lancamento: "29/10/2024",
        desenvolvido: "Dontnod Entertainment",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i3-2100 ou AMD Phenom II X4 945",
                memoria: "4 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 650 2GB ou AMD Radeon HD 7770 2GB",
                armazenamento: "20 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i5-3470 ou AMD FX-8350",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 970 ou AMD Radeon R9 280X",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "20 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "PedroSantos",
            comentario: "Adorei a comunidade online do jogo. As pessoas são muito amigáveis e prestativas, e é fácil encontrar alguém para jogar junto. Isso realmente melhora a experiência."
            },

            negativos:{
                usuario: "PedroAlmeida",
            comentario: "A comunidade online é muito tóxica. Há muitos jogadores rudes e mal-educados, o que torna difícil aproveitar o jogo em modo multiplayer."
            }
        }
    },
    //Mario & Luigi: Brothership
    {
        id: 10,
        nome: "Mario & Luigi: Brothership",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Mario%26LuigiBrothership/MLBrothership1.jpg",
            imagem2: "./images/imagens-descricao-jogos/Mario%26LuigiBrothership/MLBrothership2.jpg",
            imagem3: "./images/imagens-descricao-jogos/Mario%26LuigiBrothership/MLBrothership3.jpg",
            imagem4: "./images/imagens-descricao-jogos/Mario%26LuigiBrothership/MLBrothership4.png",
        },
        descricao: 'Mario & Luigi: Brothership é um jogo de RPG de ação e aventura desenvolvido pela Nintendo. Este título leva os jogadores a uma nova e emocionante jornada no Reino dos Cogumelos, onde Mario e Luigi devem unir forças para enfrentar novos inimigos e resolver puzzles intrigantes. O jogo combina elementos clássicos da série Mario com mecânicas de combate por turnos e exploração, oferecendo uma experiência rica e envolvente. Com gráficos vibrantes, uma história cativante e personagens adoráveis, Mario & Luigi: Brothership promete ser uma aventura imperdível para fãs de todas as idades.',
        valor: 299.90,
        lancamento: "07/11/2024",
        desenvolvido: "Nintendo",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i3-4340 ou AMD FX-6300",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 ou Radeon HD 7950",
                armazenamento: "175 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i5-2500K ou AMD Ryzen R5 1600X",
                memoria: "12 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 970 / GTX 1660 Super ou Radeon R9 390 / RX 580",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "175 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
                usuario: "JulianaCosta",
            comentario: "O design dos personagens é simplesmente espetacular. Cada personagem tem um visual único e detalhado, o que torna o jogo visualmente atraente."
            },

            negativos:{
               
            usuario: "JulioCosta",
            comentario: "O design dos personagens é horrível. Eles parecem genéricos e sem personalidade. A arte do jogo precisa de uma grande melhoria."
            }
        }
    },
    //Dragon Quest III HD-2D Remake
    {
        id: 11,
        nome: "Dragon Quest III HD-2D Remake",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/DragonQuest3Remake/DQ3Remake1.jpg",
            imagem2: "./images/imagens-descricao-jogos/DragonQuest3Remake/DQ3Remake2.jpeg",
            imagem3: "./images/imagens-descricao-jogos/DragonQuest3Remake/DQ3Remake3.jpg",
            imagem4: "./images/imagens-descricao-jogos/DragonQuest3Remake/DQ3Remake4.jpg",
        },
        descricao: 'O "Dragon Quest III HD-2D Remake" é uma versão atualizada do clássico jogo de RPG "Dragon Quest III: The Seeds of Salvation". Este remake utiliza a tecnologia HD-2D, que combina gráficos pixelados em 2D com efeitos modernos de iluminação e profundidade, criando uma estética visual que é ao mesmo tempo nostálgica e inovadora.<br>A narrativa segue o herói, filho de Ortega, em sua missão para derrotar o maligno Baramos e, eventualmente, enfrentar o vilão Zoma. A jornada abrange um mundo vasto e cheio de mistérios, com personagens memoráveis e uma trama envolvente.<br>O "Dragon Quest III HD-2D Remake" é uma celebração do legado de um dos jogos mais queridos da série Dragon Quest, oferecendo tanto para novos jogadores quanto para fãs de longa data uma experiência renovada e cativante.',
        valor: 299.90,
        lancamento: "14/11/2024",
        desenvolvido: "Square Enix",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "AMD Ryzen™ 3 1200 / Intel® Core™ i3-6100",
                memoria: "8 GB de RAM",
                placaVideo: "AMD Radeon™ RX 460 / Intel® Arc™ A380 / NVIDIA® GeForce® GTX 750",
                armazenamento: "20 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 11 64 bit",
                processador: "AMD Ryzen™ 3 1200 / Intel® Core™ i3-6100",
                memoria: "8 GB de RAM",
                placaVideo: "AMD Radeon™ RX 470 / Intel® Arc™ A580 / NVIDIA® GeForce® GTX 1060",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "20 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
                usuario: "ClaraMendes",
            comentario: "O jogo é simplesmente fenomenal! A história me prendeu do começo ao fim e os personagens são muito bem desenvolvidos. Recomendo!"
            },

            negativos:{
                usuario: "GabrielSilva",
            comentario: "Achei o jogo extremamente decepcionante. A trama é previsível e a jogabilidade deixa muito a desejar. Não vale o investimento."
            }
        }
    },
    //Assassin’s Creed Shadows 
    {
        id: 12,
        nome: "Assassin’s Creed Shadows",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/AssassinsCreedShadows/ACreedShadows1.jpg",
            imagem2: "./images/imagens-descricao-jogos/AssassinsCreedShadows/ACreedShadows2.jpg",
            imagem3: "./images/imagens-descricao-jogos/AssassinsCreedShadows/ACreedShadows3.jpg",
            imagem4: "./images/imagens-descricao-jogos/AssassinsCreedShadows/ACreedShadows4.jpg",
        },
        descricao: 'Em "Assassin’s Creed Shadows", os jogadores mergulham no Japão feudal durante o período Sengoku, uma era de constantes conflitos e guerra civil. O protagonista, Hiroshi, é um jovem aprendiz de assassino, treinado nas artes furtivas e no combate pela lendária Ordem dos Assassinos. Enfrentando os poderosos senhores da guerra e o clã dos Templários que manipulam os conflitos por trás das sombras, Hiroshi deve navegar através de intrigas políticas e batalhas sangrentas para restaurar a paz e a justiça no Japão.',
        valor: 299.90,
        lancamento: "15/11/2024",
        desenvolvido: "Ubisoft EntertainmentNintendo",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-6600K or AMD Ryzen 5 3600",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 560",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 11 64-bit",
                processador: "Intel Core i7-9700K or AMD Ryzen 7 2700X",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce RTX 3060 or AMD Radeon RX 6600 XT",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                 usuario: "BrunoCosta",
            comentario: "Os gráficos são de cair o queixo! Cada detalhe é impressionante e a ambientação é perfeita. Parabéns aos desenvolvedores!"
            },

            negativos:{
               usuario: "LiviaOliveira",
            comentario: "O jogo é muito instável. Trava frequentemente e os bugs são inúmeros. Precisa de muitas atualizações para ser jogável."
            }
        }
    },
    //Epic Mickey: Rebrushed
    {
        id: 13,
        nome: "Epic Mickey: Rebrushed",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/EpicMickeyRebrushed/EMRebrushed1.jpg",
            imagem2: "./images/imagens-descricao-jogos/EpicMickeyRebrushed/EMRebrushed2.jpg",
            imagem3: "./images/imagens-descricao-jogos/EpicMickeyRebrushed/EMRebrushed3.jpg",
            imagem4: "./images/imagens-descricao-jogos/EpicMickeyRebrushed/EMRebrushed4.jpg",
        },
        descricao: 'Disney Epic Mickey: Rebrushed traz vida à magia da Disney em um jogo vibrante de plataforma 3D. Este belo remake envia Mickey Mouse em uma jornada épica pela Terra Desolada, um reino de personagens esquecidos da Disney. No papel de Mickey, você mergulhará em um mundo fantástico e, armado com tinta e solvente, moldará sua aventura e o destino deste mundo alternativo. Cada movimento do seu pincel mágico importa! Use tinta para restaurar beleza e harmonia ou solvente para alterar o ambiente e descobrir segredos. Suas escolhas influenciam o destino de Mickey e mudam o resultado dessa odisseia artística. Será você o herói épico que a Terra Desolada precisa?',
        valor: 162.00,
        lancamento: "24/09/2024",
        desenvolvido: "Purple Lamp",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "AMD FX - 4300 / Intel Core i3 - 4130",
                memoria: "8 GB de RAM",
                placaVideo: "GeForce GTX 960 / Radeon R9 380",
                armazenamento: "28 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "AMD FX - 8300 x8 / Intel Core i5 - 3570K",
                memoria: "8 GB de RAM",
                placaVideo: "Radeon RX 570 / GeForce GTX 1050Ti",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "28 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
               usuario: "CarlaFerreira",
            comentario: "Adorei a jogabilidade fluida e os controles responsivos. É fácil de aprender e difícil de dominar, exatamente como um bom jogo deve ser."
            },

            negativos:{
               usuario: "RobertoGomes",
            comentario: "A trilha sonora é horrível. As músicas são repetitivas e irritantes, fazendo com que eu prefira jogar com o som desligado."
            }
        }
    },
    //Indiana Jones and the Great Circle
    {
        id: 14,
        nome: "Indiana Jones and the Great Circle",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/IndianaJonesTheGreatCircle/IJTGC1.jpg",
            imagem2: "./images/imagens-descricao-jogos/IndianaJonesTheGreatCircle/IJTGC2.jpg",
            imagem3: "./images/imagens-descricao-jogos/IndianaJonesTheGreatCircle/IJTGC3.jpg",
            imagem4: "./images/imagens-descricao-jogos/IndianaJonesTheGreatCircle/IJTGC4.jpg",
        },
        descricao: 'Desvenda um dos maiores mistérios da história em Indiana Jones and the Great Circle™, uma aventura a solo em primeira pessoa, passada entre os acontecimentos de Raiders of the Lost Ark™ e The Last Crusade™. No ano de 1937, forças sinistras procuram por todo o planeta o segredo para um poder antigo relacionado com o Great Circle, e apenas uma pessoa os pode deter: Indiana Jones™. Torna-te o lendário arqueólogo num jogo cinemático de ação e aventura do premiado estúdio MachineGames, também responsável pela série Wolfenstein, e com produção executiva do designer de jogos galardoado com o prémio Hall of Fame, Todd Howard.',
        valor: 199.90,
        lancamento: "2024",
        desenvolvido: "MachineGames",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-2500K ou AMD FX-6350",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 760 ou AMD Radeon R9 280",
                armazenamento: "50 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i7-4770 ou AMD Ryzen 5 1600",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1060 ou AMD Radeon RX 580",
                directX: "Versão 12",
                rede: "Conexão de internet banda larga",
                armazenamento: "50 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "Classificação Pendente",
        comentarios:{
            positivos: { 
                 usuario: "ElenaMartins",
            comentario: "As missões são variadas e desafiadoras, sempre trazendo algo novo para explorar. Nunca fica monótono!"
            },

            negativos:{
                 usuario: "MarceloSantos",
            comentario: "As missões são muito repetitivas e entediantes. Não há nenhuma inovação ou surpresa ao longo do jogo."
            }
        }
    },
    //Microsoft Flight Simulator 2024
    {
        id: 15,
        nome: "Microsoft Flight Simulator 2024",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/MicrosoftFlightSimulator2024/MFlightS1.jpg",
            imagem2: "./images/imagens-descricao-jogos/MicrosoftFlightSimulator2024/MFlightS2.jpg",
            imagem3: "./images/imagens-descricao-jogos/MicrosoftFlightSimulator2024/MFlightS3.jpg",
            imagem4: "./images/imagens-descricao-jogos/MicrosoftFlightSimulator2024/MFlightS4.jpg",
        },
        descricao: 'Explora o mundo como nunca antes em Microsoft Flight Simulator 2024, a mais recente versão do icônico simulador de voo. Com gráficos de última geração, modelagem realista de aeronaves e condições climáticas dinâmicas, este jogo oferece uma experiência imersiva de voo. Viaja por todo o planeta, desde aeroportos movimentados até pistas de pouso remotas, e desfruta de uma simulação autêntica com dados em tempo real e uma física de voo precisa. Seja para iniciantes ou pilotos experientes, Microsoft Flight Simulator 2024 proporciona uma aventura de voo incomparável, desenvolvida pelo aclamado estúdio Asobo Studio.',
        valor: 399.90,
        lancamento: "2024",
        desenvolvido: "Asobo Studio",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-4460 ou AMD Ryzen 3 1200",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 770 ou AMD Radeon RX 570",
                armazenamento: "150 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i7-9700K ou AMD Ryzen 7 3700X",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce RTX 2060 ou AMD Radeon RX 5700 XT",
                directX: "Versão 12",
                rede: "Conexão de internet banda larga",
                armazenamento: "150 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "Classificação Pendente",
        comentarios:{
            positivos: { 
                usuario: "NataliaLima",
            comentario: "Os personagens são carismáticos e cheios de personalidade. É fácil se apegar a eles e se importar com suas histórias."
            },

            negativos:{
                usuario: "ThiagoRibeiro",
            comentario: "Os personagens são superficiais e sem graça. Não consegui me conectar com nenhum deles durante o jogo."
            }
        }
    },
    //Silent Hill 2 Remake
    {
        id: 16,
        nome: "Silent Hill 2 Remake",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/SilentHill2Remake/SilentHill2Remake1.jpg",
            imagem2: "./images/imagens-descricao-jogos/SilentHill2Remake/SilentHill2Remake2.jpg",
            imagem3: "./images/imagens-descricao-jogos/SilentHill2Remake/SilentHill2Remake3.jpg",
            imagem4: "./images/imagens-descricao-jogos/SilentHill2Remake/SilentHill2Remake4.jpg",
        },
        descricao: `Tendo recebido uma carta de sua falecida esposa,<br>
        James dirige-se ao local onde compartilharam muitas lembranças,<br>
        na esperança de vê-la mais uma vez: Silent Hill.<br>
        Lá, à beira do lago, ele encontra uma mulher estranhamente parecida com ela...<br>
        <br>
        "Meu nome... é Maria," a mulher sorri. Seu rosto, sua voz... Ela é exatamente como ela.
        <br>
        Vivencie uma aula magistral de terror psicológico — elogiado como o melhor da série — no hardware mais recente, com visuais arrepiantes e sons viscerais.`,
        valor: 299.90,
        lancamento: "08/10/2024",
        desenvolvido: "Bloober Team SA",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i7-6700K | AMD Ryzen 5 3600",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA® GeForce® GTX 1070 Ti or AMD Radeon™ RX 5700",
                armazenamento: "50 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-8700K | AMD Ryzen 5 3600X",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "50 GB de espaço disponível",
                placaSom: " Windows Compatible Audio Device"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "AndersonAlves",
            comentario: "A mecânica de combate é muito bem desenvolvida. Cada luta é emocionante e exige estratégia e habilidade."
            },

            negativos:{
                usuario: "VanessaDias",
            comentario: "A mecânica de combate é desastrosa. Os controles são imprecisos e os inimigos são extremamente desequilibrados."
            }
        }
    },
    //HORIZON ZERO DAWN
    {
        id: 17,
        nome: "HORIZON ZERO DAWN",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/HorizonZeroDawn/HorizonZeroDawn1.jpg",
            imagem2: "./images/imagens-descricao-jogos/HorizonZeroDawn/HorizonZeroDawn2.jpg",
            imagem3: "./images/imagens-descricao-jogos/HorizonZeroDawn/HorizonZeroDawn3.jpg",
            imagem4: "./images/imagens-descricao-jogos/HorizonZeroDawn/HorizonZeroDawn4.jpg",
        },
        descricao: `A TERRA NÃO NOS PERTENCE MAIS
        <br>
        Viva a experiência de Aloy dos Nora em sua busca lendária para desvendar os mistérios de um mundo controlado por Máquinas mortais.
        <br>
        Exilada da sua tribo, esta jovem caçadora luta para desvendar seu passado, descobrir seu destino… e deter uma catástrofe futura.
        <br>
        Lance ataques táticos devastadores contra Máquinas e também tribos rivais, enquanto explora um mundo aberto cheio de vida selvagem e perigos.
        <br>
        Horizon Zero Dawn™ é um RPG de aventura e ação vencedor de vários prêmios – e esta Edição Completa inclui a expansão The Frozen Wilds, com novos territórios e novas habilidades, armas e Máquinas`,
        valor: 199.90,
        lancamento: "07/08/2020",
        desenvolvido: "Guerrilla",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-2500K@3.3GHz or AMD FX 6300@3.5GHz",
                memoria: "8 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 780 (3 GB) or AMD Radeon R9 290 (4GB)",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-4770K@3.5GHz or Ryzen 5 1500X@3.5GHz",
                memoria: "16 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 1060 (6 GB) or AMD Radeon RX 580 (8GB)",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 14,
        comentarios:{
            positivos: { 
                usuario: "IsabelaPereira",
            comentario: "O modo multiplayer é incrível! Jogar com amigos torna a experiência ainda mais divertida e envolvente."
            },

            negativos:{
                usuario: "GustavoRodrigues",
            comentario: "O modo multiplayer é péssimo. Muitos problemas de conexão e a comunidade é tóxica. Não vale a pena."
            }
        }
    },
    //THE KING OF FIGHTER XV
    {
        id: 18,
        nome: "THE KING OF FIGHTER XV",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/TheKingOfFighterXV/TKFighterXV1.jpeg",
            imagem2: "./images/imagens-descricao-jogos/TheKingOfFighterXV/TKFighterXV2.jpg",
            imagem3: "./images/imagens-descricao-jogos/TheKingOfFighterXV/TKFighterXV3.jpg",
            imagem4: "./images/imagens-descricao-jogos/TheKingOfFighterXV/TKFighterXV4.jpg",
        },
        descricao: 'THE KING OF FIGHTERS XV é o mais recente título da icônica série de jogos de luta desenvolvida pela SNK. Este jogo continua a tradição de combates frenéticos e estratégicos que a série é conhecida por oferecer. Com uma ampla seleção de personagens jogáveis, cada um com estilos de luta únicos e especiais devastadores, os jogadores podem participar de batalhas emocionantes em uma variedade de cenários dinâmicos. Além do modo arcade tradicional, o jogo oferece modos online competitivos, permitindo que jogadores de todo o mundo enfrentem uns aos outros em busca da supremacia nos torneios de KOF. Com gráficos atualizados e mecânicas de jogo refinadas, THE KING OF FIGHTERS XV promete ser uma experiência imperdível para os fãs de jogos de luta e da série KOF.',
        valor: 194.35,
        lancamento: "17/02/2022",
        desenvolvido: "SNK CORPORATION",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 7 64-bit",
                processador: "Intel Core i5",
                memoria: "8 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
                armazenamento: "54 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7",
                memoria: "16 GB de RAM",
                placaVideo: "NNvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "65 GB de espaço disponível",
                placaSom: "Compatível com DirectX"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
                usuario: "LuizCarvalho",
            comentario: "A customização dos personagens é excelente. É possível criar avatares únicos e personalizados. Muito divertido!"
            },

            negativos:{
                 usuario: "RenataAraujo",
            comentario: "A customização dos personagens é muito limitada. Poucas opções disponíveis, o que torna tudo muito genérico."
            }
        }
    },
    //Call of Duty®: Modern Warfare® III
    {
        id: 19,
        nome: "Call of Duty®: Modern Warfare® III",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/CallofDutyModern%20Warfare3/COfDW1.jpg",
            imagem2: "./images/imagens-descricao-jogos/CallofDutyModern%20Warfare3/COfDW2.jpg",
            imagem3: "./images/imagens-descricao-jogos/CallofDutyModern%20Warfare3/COfDW3.jpg",
            imagem4: "./images/imagens-descricao-jogos/CallofDutyModern%20Warfare3/COfDW4.jpeg",
        },
        descricao: `O jogo continua a narrativa intensa e cinematográfica da série, ambientada em um futuro próximo com cenários de guerra moderna. Os jogadores assumem papéis de soldados de várias nacionalidades, enfrentando ameaças globais em campanhas de um jogador repletas de ação. A história segue eventos diretos dos seus predecessores, explorando conflitos geopolíticos e operações secretas.
        <br>
        Além da campanha solo emocionante, Modern Warfare III apresenta um robusto modo multijogador competitivo, com mapas variados, modos de jogo tradicionais como Team Deathmatch e Domination, além de inovações como o modo Spec Ops, que permite cooperar em missões especiais desafiadoras.`,
        valor: 0,
        lancamento: "10/03/2023",
        desenvolvido: "Infinity Ward, em colaboração com a Sledgehammer Games e Raven Software.",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel® Core™ i5-6600 ou AMD Ryzen™ 5 1400",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA® GeForce® GTX 960 / GTX 1650 ou AMD Radeon™ RX 470",
                armazenamento: "149 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit, Windows® 11 64 bit",
                processador: "Intel® Core™ i7-6700K ou AMD Ryzen™ 5 1600X",
                memoria: "16 GB de RAM",
                placaVideo: " NVIDIA® GeForce® GTX 1080Ti / RTX 3060 ou AMD Radeon™ RX 6600XT ou Intel® Arc™ A770",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "149 GB de espaço disponível",
                placaSom: "Compatível com DirectX 9.0c"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "FelipeFonseca",
            comentario: "Os eventos sazonais são uma ótima adição! Sempre há algo novo para descobrir e desafios para completar."
            },

            negativos:{
                usuario: "AlineBarros",
            comentario: "Os eventos sazonais são desinteressantes e repetitivos. Não acrescentam nada de novo ou emocionante ao jogo."
            }
        }
    },
    //Overcooked 2
    {
        id: 20,
        nome: "Overcooked 2",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Overcooked2/OvercookedII1.jpg",
            imagem2: "./images/imagens-descricao-jogos/Overcooked2/OvercookedII2.png",
            imagem3: "./images/imagens-descricao-jogos/Overcooked2/OvercookedII3.png",
            imagem4: "./images/imagens-descricao-jogos/Overcooked2/OvercookedII4.jpeg",
        },
        descricao: `Overcooked 2 é um jogo de simulação cooperativa caótica desenvolvido pela Ghost Town Games e publicado pela Team17. No jogo, os jogadores assumem o papel de chefs em cozinhas malucas e imprevisíveis, onde precisam trabalhar em equipe para preparar e servir uma variedade de pratos deliciosos dentro de prazos apertados.
        <br>
        A jogabilidade de Overcooked 2 é caracterizada por desafios cada vez mais complexos, que exigem coordenação e comunicação eficaz entre os jogadores. Cada nível apresenta novos obstáculos, como cozinhas que se movem, ingredientes que desaparecem e layouts de cozinha complicados, aumentando a dificuldade e a diversão. Além da campanha principal, o jogo oferece modos competitivos e cooperativos online e local, permitindo que até quatro jogadores se juntem para uma experiência de cozinha frenética e hilariante.`,
        valor: 0,
        lancamento: "07/08/2018",
        desenvolvido: " Ghost Town Games Ltd., Team17",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 7 64-bit",
                processador: "Intel i3-2100 / AMD A8-5600k",
                memoria: "4 GB de RAM",
                placaVideo: "GeForce GTX 630 / Radeon HD 6570",
                armazenamento: "3 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 7 64 bit",
                processador: "Intel i5-650 / AMD A10-5800K",
                memoria: "4 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 650 / Radeon HD 7510",
                directX: "Versão 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "3 GB de espaço disponível",
                placaSom: "DirectX Compatible Sound Card"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
               usuario: "DaniloMoura",
            comentario: "A interface do usuário é muito intuitiva e fácil de navegar. Não tive dificuldades para encontrar o que precisava."
            },

            negativos:{
                 usuario: "PatriciaMoreira",
            comentario: "A interface do usuário é confusa e mal projetada. Muitas vezes fiquei perdido tentando achar certas funcionalidades."
            }
        }
    },
    //Tekken 8®
    {
        id: 21,
        nome: "Tekken 8®",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Tekken8/Tekken81.png",
            imagem2: "./images/imagens-descricao-jogos/Tekken8/Tekken82.jpg",
            imagem3: "./images/imagens-descricao-jogos/Tekken8/Tekken83.jpg",
            imagem4: "./images/imagens-descricao-jogos/Tekken8/Tekken84.png",
        },
        descricao: `Sinta o poder de cada golpe em Tekken 8, o mais novo capítulo da lendária franquia de jogo de luta da Bandai Namco. 
        <br>
        Usando o poder e realismo da Unreal Engine 5, Tekken 8 leva os jogos de luta a um novo nível, aproveitando toda a potência da nova geração de consoles. 
        <br>
        Novos recursos inovadores, personagens incrivelmente detalhados e cenários dramáticos fazem deste título um dos mais visualmente impressionantes e imersivos do gênero até agora. 
        <br>
        Tekken 8 retoma a história após a violenta batalha que terminou na derrota de Heihachi Mishima em Tekken 7 — mas agora o foco é um novo conflito de pai contra filho: Jin Kazama vai desafiar Kazuya Mishima num confronto que vai abalar as estruturas da cidade.`,
        valor: 0,
        lancamento: "21/01/2024",
        desenvolvido: "Bandai Namco Studios Inc.",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-6600K/AMD Ryzen 5 1600",
                memoria: "8 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 1050Ti/AMD Radeon R9 380X",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-7700K/AMD Ryzen 5 2600",
                memoria: "16 GB de RAM",
                placaVideo: "Nvidia GeForce RTX 2070/AMD Radeon RX 5700 XT",
                directX: "Versão 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: "DirectX compatible soundcard/Onboard chipset"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
                  usuario: "RaquelTeixeira",
            comentario: "O suporte técnico é excelente. Todas as minhas dúvidas foram resolvidas rapidamente e com muita eficiência."
            },

            negativos:{
               usuario: "EduardoLopes",
            comentario: "O suporte técnico é muito lento e ineficiente. Tive que esperar dias para receber uma resposta que nem solucionou meu problema."
            }
        }
    },
    //Alan Wake 2
    {
        id: 22,
        nome: "Alan Wake 2",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/AlanWake2/AlanWakeII1.jpeg",
            imagem2: "./images/imagens-descricao-jogos/AlanWake2/AlanWakeII2.png",
            imagem3: "./images/imagens-descricao-jogos/AlanWake2/AlanWakeII3.jpg",
            imagem4: "./images/imagens-descricao-jogos/AlanWake2/AlanWakeII4.jpg",
        },
        descricao: 'Em "Alan Wake 2", a narrativa continua de onde o jogo original e suas expansões pararam. Desta vez, Alan está preso em uma realidade sombria conhecida como o "Dark Place", um reflexo distorcido de Bright Falls. Ele luta para escapar deste pesadelo enquanto enfrenta novos inimigos sobrenaturais e descobre segredos mais profundos sobre a natureza da escuridão que o persegue. A história é novamente apresentada de forma episódica, imitando uma série de televisão, com reviravoltas emocionantes e cliffhangers. <br> <br>O jogo também apresenta uma nova personagem jogável, uma investigadora do FBI chamada Saga Anderson, que é enviada a Bright Falls para investigar uma série de assassinatos misteriosos. As histórias de Alan e Saga se entrelaçam à medida que ambos tentam desvendar os segredos da escuridão e encontrar um caminho para a luz.',
        valor: 0,
        lancamento: "27/10/2023",
        desenvolvido: "Remedy Entertainment",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit, Windows® 11 64-bit",
                processador: "Intel i5-7600K ou AMD equivalente",
                memoria: "16 GB de RAM",
                placaVideo: "GeForce GTX 1070 / Radeon RX 5600 XT",
                armazenamento: "90 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit, Windows® 11 64 bit",
                processador: "Ryzen 7 3700X ou Intel equivalente",
                memoria: "16 GB de RAM",
                placaVideo: "GeForce RTX 3060 / Radeon RX 6600 XT",
                directX: "",
                rede: "Conexão de Internet banda larga",
                armazenamento: "90 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "JoanaNascimento",
            comentario: "Os gráficos em alta definição são de tirar o fôlego. A qualidade visual realmente eleva a experiência do jogo."
            },

            negativos:{
                usuario: "LeonardoCamargo",
            comentario: "Os gráficos são de baixa qualidade e parecem desatualizados. O jogo precisa de uma grande atualização visual."
            }
        }
    },
    //Red Dead Redemption 2
    {
        id: 23,
        nome: "Red Dead Redemption 2",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/RedDeadRedemption2/RDRII1.jpg",
            imagem2: "./images/imagens-descricao-jogos/RedDeadRedemption2/RDRII2.jpg",
            imagem3: "./images/imagens-descricao-jogos/RedDeadRedemption2/RDRII3.jpg",
            imagem4: "./images/imagens-descricao-jogos/RedDeadRedemption2/RDRII4.jpg",
        },
        descricao: `Red Dead Redemption 2 é um épico de ação e aventura ambientado no final do século XIX, desenvolvido pela Rockstar Games. O jogo é uma prequela de Red Dead Redemption e segue a história de Arthur Morgan, um fora-da-lei membro da gangue Van der Linde.
        <br>
        A narrativa rica e profunda explora temas de lealdade, sobrevivência e o fim de uma era. Os jogadores embarcam em uma jornada pelo coração do oeste americano, atravessando vastas paisagens montanhosas, pântanos sinistros e cidades em expansão. Arthur e sua gangue enfrentam desafios de todos os tipos, desde confrontos com outras gangues até interações com autoridades e caçadores de recompensas.
        <br>
        Além da narrativa principal, Red Dead Redemption 2 oferece um mundo aberto vivo e dinâmico, onde os jogadores podem caçar, pescar, jogar poker, e explorar uma miríade de atividades e missões secundárias. Com gráficos impressionantes, mecânicas de jogo imersivas e uma trilha sonora memorável, o jogo recebeu aclamação crítica por sua profundidade e detalhes.`,
        valor: 99.99,
        lancamento: "05/10/2019",
        desenvolvido: "Rockstar Games",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "ntel® Core™ i7-4770K / AMD Ryzen 5 1500X",
                memoria: "12 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
                armazenamento: "150 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
                memoria: "12 GB de RAM",
                placaVideo: " Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "150 GB de espaço disponível",
                placaSom: "Direct X Compatible"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                 usuario: "MartaSilva",
            comentario: "O enredo é profundo e emocional. Fui completamente envolvida pela história e não consegui parar de jogar até terminar."
            },

            negativos:{
                 usuario: "RenatoMendonça",
            comentario: "O enredo é fraco e sem emoção. Não há nada que me prenda ou me faça querer continuar jogando."
            }
        }
    },
    //The Last of Us™ Part I - Deluxe
    {
        id: 24,
        nome: "The Last of Us™ Part I - Deluxe",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/TheLastofUsPartIDeluxe/TLOfUsP1D1.jpeg",
            imagem2: "./images/imagens-descricao-jogos/TheLastofUsPartIDeluxe/TLOfUsP1D2.jpg",
            imagem3: "./images/imagens-descricao-jogos/TheLastofUsPartIDeluxe/TLOfUsP1D3.jpg",
            imagem4: "./images/imagens-descricao-jogos/TheLastofUsPartIDeluxe/TLOfUsP1D4.jpeg",
        },
        descricao: `A história segue Joel, um contrabandista experiente, e Ellie, uma jovem corajosa com um segredo vital, enquanto eles viajam através dos Estados Unidos em busca de segurança em meio ao caos e perigos da pandemia. O jogo combina elementos de ação furtiva, exploração e resolução de quebra-cabeças, com uma narrativa emocionalmente intensa que explora temas de sobrevivência, sacrifício e redenção.
        <br>
        "The Last of Us Part I" recebeu aclamação da crítica por sua história cativante, personagens bem desenvolvidos e jogabilidade envolvente. Ele também foi elogiado por suas representações gráficas impressionantes e trilha sonora atmosférica.`,
        valor: 249.9,
        lancamento: "28/03/2023",
        desenvolvido: "Naughty Dog LLC",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
                memoria: "12 GB de RAM",
                placaVideo: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
                armazenamento: "150 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
                memoria: "12 GB de RAM",
                placaVideo: " Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "150 GB de espaço disponível",
                placaSom: "Direct X Compatible"
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "ClaudioVasconcelos",
            comentario: "Os quebra-cabeças são bem elaborados e desafiadores. Cada um exige pensamento crítico e é muito satisfatório resolver."
            },

            negativos:{
              usuario: "LarissaCosta",
            comentario: "Os quebra-cabeças são chatos e repetitivos. Fiquei entediada rapidamente e não senti nenhuma satisfação em resolvê-los."
            }
        }
    },
    //Battlefield
    {
        id: 25,
        nome: "Battlefield",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Battlefield/Battlefield1.jpg",
            imagem2: "./images/imagens-descricao-jogos/Battlefield/Battlefield2.jpg",
            imagem3: "./images/imagens-descricao-jogos/Battlefield/Battlefield3.jpg",
            imagem4: "./images/imagens-descricao-jogos/Battlefield/Battlefield4.jpg",
        },
        descricao: `A série Battlefield é conhecida por seus jogos de tiro em primeira pessoa que se destacam pelo foco em combates intensos, veículos e vastos ambientes de batalha. Cada jogo da série geralmente se concentra em conflitos militares modernos ou históricos, oferecendo uma mistura de campanhas solo envolventes e modos multijogador competitivos.
        <br>
        Principais características da série Battlefield:
        <br>
        1. Ambientes de Batalha Realistas: Os jogos da série Battlefield são elogiados por seus ambientes de batalha vastos e detalhados, que vão desde cenários urbanos modernos até paisagens rurais e históricas.
        <br>
        2. Modos Multijogador Diversificados: Battlefield oferece uma variedade de modos multijogador, como Conquista (onde equipes competem pelo controle de pontos-chave no mapa), Operações (que simula batalhas históricas em vários mapas), e outros modos como Dominação, Equipe de Ataque, entre outros.
        <br>
        3. Veículos: A série Battlefield é conhecida por seu uso extensivo de veículos militares, que vão desde tanques e helicópteros até jipes e barcos, proporcionando uma experiência de jogo diversificada e dinâmica.
        <br>
        4. Campanhas Solo Imersivas: Alguns jogos da série também incluem campanhas solo que exploram histórias de guerra emocionantes e dramáticas, oferecendo uma experiência cinematográfica para os jogadores.
        <br>
        5. Progressão e Personalização: Os jogos Battlefield geralmente incluem sistemas de progressão e personalização, permitindo que os jogadores desbloqueiem novas armas, equipamentos e customizações à medida que avançam no jogo.
        <br>
        6. Gráficos e Som: A série é conhecida por seus gráficos impressionantes e áudio imersivo, proporcionando uma experiência visual e auditiva realista.`,
        valor: 24.90,
        lancamento: "21/11/2021",
        desenvolvido: "DICE",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "AMD Ryzen 5 1600, Core i5 6600K",
                memoria: "8 GB de RAM",
                placaVideo: "AMD Radeon RX 560,Nvidia GeForce GTX 1050 Ti",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "AMD Ryzen 7 2700X, Intel Core i7 4790",
                memoria: "16 GB de RAM",
                placaVideo: "AMD Radeon RX 6600 XT, Nvidia GeForce RTX 3060",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "MarcosAlmeida",
            comentario: "A progressão de níveis é bem balanceada e recompensadora. Senti que estava sempre fazendo progresso significativo."
            },

            negativos:{
                usuario: "BarbaraDias",
            comentario: "A progressão de níveis é muito lenta e frustrante. Parece que estou sempre no mesmo lugar, sem fazer nenhum progresso real."
            }
        }
    },
    //Hogwarts Lagacy
    {
        id: 26,
        nome: "Hogwarts Lagacy",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/HogwartsLagacy/HogwartsLagacy1.jpg",
            imagem2: "./images/imagens-descricao-jogos/HogwartsLagacy/HogwartsLagacy2.jpg",
            imagem3: "./images/imagens-descricao-jogos/HogwartsLagacy/HogwartsLagacy3.jpg",
            imagem4: "./images/imagens-descricao-jogos/HogwartsLagacy/HogwartsLagacy4.jpg",
        },
        descricao: `A série Battlefield é conhecida por seus jogos de tiro em primeira pessoa que se destacam pelo foco em combates intensos, veículos e vastos ambientes de batalha. Cada jogo da série geralmente se concentra em conflitos militares modernos ou históricos, oferecendo uma mistura de campanhas solo envolventes e modos multijogador competitivos.
        <br>
        Principais características da série Battlefield:
        <br>
        1. Ambientes de Batalha Realistas: Os jogos da série Battlefield são elogiados por seus ambientes de batalha vastos e detalhados, que vão desde cenários urbanos modernos até paisagens rurais e históricas.
        <br>
        2. Modos Multijogador Diversificados: Battlefield oferece uma variedade de modos multijogador, como Conquista (onde equipes competem pelo controle de pontos-chave no mapa), Operações (que simula batalhas históricas em vários mapas), e outros modos como Dominação, Equipe de Ataque, entre outros.
        <br>
        3. Veículos: A série Battlefield é conhecida por seu uso extensivo de veículos militares, que vão desde tanques e helicópteros até jipes e barcos, proporcionando uma experiência de jogo diversificada e dinâmica.
        <br>
        4. Campanhas Solo Imersivas: Alguns jogos da série também incluem campanhas solo que exploram histórias de guerra emocionantes e dramáticas, oferecendo uma experiência cinematográfica para os jogadores.
        <br>
        5. Progressão e Personalização: Os jogos Battlefield geralmente incluem sistemas de progressão e personalização, permitindo que os jogadores desbloqueiem novas armas, equipamentos e customizações à medida que avançam no jogo.
        <br>
        6. Gráficos e Som: A série é conhecida por seus gráficos impressionantes e áudio imersivo, proporcionando uma experiência visual e auditiva realista.`,
        valor: 127.00,
        lancamento: "10/02/2023",
        desenvolvido: "Avalanche Software",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB",
                armazenamento: "85 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64 bit",
                processador: "Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "85 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
               usuario: "HelenaPinto",
            comentario: "O sistema de crafting é muito detalhado e intuitivo. É divertido coletar materiais e criar novos itens."
            },

            negativos:{
               usuario: "FernandoSilva",
            comentario: "O sistema de crafting é confuso e mal explicado. Passei horas tentando entender como funciona sem sucesso."
            }
        }
    },
    //Valorant
    {
        id: 27,
        nome: "Valorant",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Valorant/Valorant1.jpg",
            imagem2: "./images/imagens-descricao-jogos/Valorant/Valorant2.jpg",
            imagem3: "./images/imagens-descricao-jogos/Valorant/Valorant3.jpg",
            imagem4: "./images/imagens-descricao-jogos/Valorant/Valorant4.jpg",
        },
        descricao: `Valorant é um jogo de tiro tático em primeira pessoa da Riot Games, lançado em 2020. Os jogadores assumem o papel de agentes com habilidades únicas, enfrentando partidas estratégicas onde o objetivo pode envolver plantar ou desativar bombas, ou eliminar a equipe adversária. Com um sistema de economia integrado, mapas variados e um forte foco em habilidade e estratégia, Valorant é conhecido por sua jogabilidade competitiva e comunidade ativa de jogadores ao redor do mundo.`,
        valor: 0,
        lancamento: "02/02/2020",
        desenvolvido: "Riot Games",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 7/8/10 64-bit",
                processador: "Intel Core 2 Duo E8400",
                memoria: "4 GB de RAM",
                placaVideo: "Intel HD 3000",
                armazenamento: "8 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 7/8/10 64-bit",
                processador: "Intel i3-4150",
                memoria: "4 GB de RAM",
                placaVideo: "GeForce GT 730",
                directX: "DirectX 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "8 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Sobrevivência, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 14,
        comentarios:{
            positivos: { 
                 usuario: "DragonSlayer",
            comentario: "O jogo é simplesmente fenomenal! A história me prendeu do começo ao fim e os personagens são muito bem desenvolvidos. Recomendo!"
            },

            negativos:{
               usuario: "NoobMaster69",
            comentario: "Achei o jogo extremamente decepcionante. A trama é previsível e a jogabilidade deixa muito a desejar. Não vale o investimento."
            }
        }
    },
    //DEVIL MAY CRY 5
    {
        id: 28,
        nome: "DEVIL MAY CRY 5",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/DevilMayCry5/DevilMayCry51.jpg",
            imagem2: "./images/imagens-descricao-jogos/DevilMayCry5/DevilMayCry52.jpg",
            imagem3: "./images/imagens-descricao-jogos/DevilMayCry5/DevilMayCry53.jpg",
            imagem4: "./images/imagens-descricao-jogos/DevilMayCry5/DevilMayCry54.jpg",
        },
        descricao: `Devil May Cry 5 é uma sequência direta do quarto jogo da franquia e dá continuidade aos acontecimentos de seu antecessor. Conta a história de Dante, Nero e do misterioso V, personagem que procura a ajuda de Dante para poder derrotar o temido Urizen, o rei demônio.`,
        valor: 0,
        lancamento: "07/03/2019",
        desenvolvido: "CAPCOM Co., Ltd.",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel® Core™ i5-4460, AMD FX™-6300",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM",
                armazenamento: "35 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel® Core™ i7-3770, AMD FX™-9590",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA® GeForce® GTX 1060 with 6GB VRAM, AMD Radeon™ RX 480 with 8GB VRAM",
                directX: "DirectX 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "35 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "ShadowHunter",
            comentario: "Os gráficos são de cair o queixo! Cada detalhe é impressionante e a ambientação é perfeita. Parabéns aos desenvolvedores!"
            },

            negativos:{
                 usuario: "DarkAvenger",
            comentario: "O jogo é muito instável. Trava frequentemente e os bugs são inúmeros. Precisa de muitas atualizações para ser jogável."
            }
        }
    },
    //Ghost of Tsushima
    {
        id: 29,
        nome: "Ghost of Tsushima",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/GhostofTsushima/GhostOfTsushima1.png",
            imagem2: "./images/imagens-descricao-jogos/GhostofTsushima/GhostOfTsushima2.jpg",
            imagem3: "./images/imagens-descricao-jogos/GhostofTsushima/GhostOfTsushima3.jpg",
            imagem4: "./images/imagens-descricao-jogos/GhostofTsushima/GhostOfTsushima4.jpeg",
        },
        descricao: `O jogo começa com Jin Sakai e seu tio, Lorde Shimura, defendendo a ilha de Tsushima contra a invasão mongol liderada por Khotun Khan. Durante a batalha inicial, Jin é derrotado e Shimura é capturado. Gravemente ferido, Jin é salvo por Yuna, uma ladra que o incentiva a adotar táticas de guerrilha para combater os mongóis, em vez de seguir o código de honra dos samurais.
        <br>
        <br>
        Conforme Jin se adapta a essas novas táticas, ele ganha a alcunha de "Fantasma de Tsushima". Sua jornada envolve reunir aliados, resgatar Lorde Shimura e expulsar os mongóis da ilha. A narrativa explora temas de honra, sacrifício e identidade, enquanto Jin enfrenta dilemas morais entre as tradições samurais e as necessidades práticas da guerra.`,
        valor: 0,
        lancamento: "16/05/2024",
        desenvolvido: "Sucker Punch Productions, Nixxes Software",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i3-7100 or AMD Ryzen 3 1200",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 960 or AMD Radeon RX 5500 XT",
                armazenamento: "75 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-8600 or AMD Ryzen 5 3600",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GeForce RTX 2060 or AMD Radeon RX 5600 XT",
                directX: " ",
                rede: "Conexão de Internet banda larga",
                armazenamento: "75 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Aventura",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "LightBringer",
            comentario: "Adorei a jogabilidade fluida e os controles responsivos. É fácil de aprender e difícil de dominar, exatamente como um bom jogo deve ser."
            },

            negativos:{
                usuario: "SilentKiller",
            comentario: "A trilha sonora é horrível. As músicas são repetitivas e irritantes, fazendo com que eu prefira jogar com o som desligado."
            }
        }
    },
    //Fallout 4
    {
        id: 30,
        nome: "Fallout 4",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Fallout4/Fallout41.jpg",
            imagem2: "./images/imagens-descricao-jogos/Fallout4/Fallout42.png",
            imagem3: "./images/imagens-descricao-jogos/Fallout4/Fallout43.jpg",
            imagem4: "./images/imagens-descricao-jogos/Fallout4/Fallout44.png",
        },
        descricao: `"Fallout 4" se passa em um mundo pós-apocalíptico devastado por uma guerra nuclear. A história começa no ano de 2077, no dia em que as bombas caem, e rapidamente avança para o ano de 2287, 210 anos após a devastação nuclear.
        <br>
        O Protagonista: O jogador controla o "Sole Survivor", um residente do Vault 111 que acorda após um longo sono criogênico para descobrir que seu cônjuge foi assassinado e seu filho foi sequestrado.
        <br>
        Missão Principal: A busca pelo filho sequestrado leva o jogador a explorar a Commonwealth, a região devastada anteriormente conhecida como Boston, Massachusetts.`,
        valor: 47.99,
        lancamento: "10/11/2015",
        desenvolvido: "Bethesda Game Studios",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 7/8/10 64-bit",
                processador: "Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB",
                armazenamento: "30 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 7/8/10 64-bit",
                processador: "Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4G",
                directX: " ",
                rede: "Conexão de Internet banda larga",
                armazenamento: "30 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "PhoenixRising",
            comentario: "As missões são variadas e desafiadoras, sempre trazendo algo novo para explorar. Nunca fica monótono!"
            },

            negativos:{
                 usuario: "StormBringer",
            comentario: "As missões são muito repetitivas e entediantes. Não há nenhuma inovação ou surpresa ao longo do jogo."
            }
        }
    },
    //Hades
    {
        id: 31,
        nome: "Hades",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/Hades/Hades1.jpg",
            imagem2: "./images/imagens-descricao-jogos/Hades/Hades2.png",
            imagem3: "./images/imagens-descricao-jogos/Hades/Hades3.jpg",
            imagem4: "./images/imagens-descricao-jogos/Hades/Hades4.png",
        },
        descricao: `O jogo é ambientado no submundo da mitologia grega e segue Zagreus, o filho de Hades, na sua tentativa de escapar do reino dos mortos para alcançar o Monte Olimpo.
        <br>
        Zagreus: Protagonista do jogo, filho de Hades, que busca escapar do submundo e descobrir a verdade sobre sua origem.
        <br>
        Hades: O senhor do submundo e pai de Zagreus, que tenta impedir sua fuga.
        <br>
        Deuses do Olimpo: Deuses como Zeus, Atena, Ares e Afrodite oferecem ajuda a Zagreus durante sua jornada, concedendo habilidades e poderes especiais.`,
        valor: 29.59,
        lancamento: "17/09/2020",
        desenvolvido: "Supergiant Games",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 7/ 64-bit",
                processador: "Dual Core 2.4 GHz",
                memoria: "4 GB de RAM",
                placaVideo: "1GB VRAM",
                armazenamento: "15 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 7 64-bit",
                processador: "Dual Core 3.0 GHz+",
                memoria: "8 GB de RAM",
                placaVideo: "2GB VRAM",
                directX: "DirectX 10",
                rede: "Conexão de Internet banda larga",
                armazenamento: "20 GB de espaço disponível",
                placaSom: ""
            }
        },
        genero: "Ação, Indie, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 14,
        comentarios:{
            positivos: { 
                usuario: "NightShade",
            comentario: "Os personagens são carismáticos e cheios de personalidade. É fácil se apegar a eles e se importar com suas histórias."
            },

            negativos:{
                 usuario: "DeathDealer",
            comentario: "Os personagens são superficiais e sem graça. Não consegui me conectar com nenhum deles durante o jogo."
            }
        }
    },
    //Elden Ring
    {
        id: 32,
        nome: "Elden Ring",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/EldenRing/EldenRing1.jpg",
            imagem2: "./images/imagens-descricao-jogos/EldenRing/EldenRing2.jpg",
            imagem3: "./images/imagens-descricao-jogos/EldenRing/EldenRing3.jpg",
            imagem4: "./images/imagens-descricao-jogos/EldenRing/EldenRing4.jpg",
        },
        descricao: `Lançado em fevereiro de 2022, o jogo foi dirigido por Hidetaka Miyazaki, com a colaboração do renomado autor de fantasia George R.R. Martin, conhecido por "As Crônicas de Gelo e Fogo". O jogo foi lançado para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S e Microsoft Windows.
        <br>
        "Elden Ring" se passa no mundo de Lands Between, um reino vasto e interconectado, governado por semideuses. O jogador assume o papel de um Tarnished (Maculado), um exilado que retorna ao reino para procurar o Elden Ring e se tornar o Elden Lord.
        <br>
        Mundo Aberto: Diferente dos jogos anteriores da FromSoftware, "Elden Ring" apresenta um vasto mundo aberto, com diversas regiões, biomas e dungeons interconectadas.
        <br>
        Combate: Mantém o combate desafiador e estratégico característico dos jogos Souls, incluindo uma grande variedade de armas, magias e habilidades.
        <br>
        Montaria: Pela primeira vez em um jogo da FromSoftware, os jogadores podem usar uma montaria para explorar o mundo e combater inimigos.
        <br>
        Personalização: Ampla customização de personagens, permitindo aos jogadores escolher entre várias classes e adaptar suas habilidades e equipamentos ao seu estilo de jogo.
        <br>
        Multiplayer: Inclui modos cooperativo e PvP (jogador contra jogador), permitindo que os jogadores se juntem para enfrentar desafios ou lutem entre si.`,
        valor: 160.93,
        lancamento: "24/02/2022",
        desenvolvido: "FromSoftware Inc.",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core I5-8400 or AMD RYZEN 3 3300X",
                memoria: "12 GB de RAM",
                placaVideo: "NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
                armazenamento: "60 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "INTEL CORE I7-8700K or AMD RYZEN 5 3600X",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "60 GB de espaço disponível",
                placaSom: "Windows Compatible Audio Device"
            }
        },
        genero: "Ação, RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "BladeMaster",
            comentario: "A mecânica de combate é muito bem desenvolvida. Cada luta é emocionante e exige estratégia e habilidade."
            },

            negativos:{
                 usuario: "SoulReaper",
            comentario: "A mecânica de combate é desastrosa. Os controles são imprecisos e os inimigos são extremamente desequilibrados."
            }
        }
    },
    //GTA V: Edição Premium
    {
        id: 33,
        nome: "GTA V: Edição Premium",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP1.jpg",
            imagem2: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP2.jpeg",
            imagem3: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP3.jpg",
            imagem4: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP4.jpg",
        },
        descricao: `Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade onde não podem confiar em ninguém, nem mesmo um no outro.`,
        valor: 249.90,
        lancamento: "14/05/2020",
        desenvolvido: "Rockstar North",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core 2 Quad CPU Q6600 de 2,40 GHz",
                memoria: "4 GB de RAM",
                placaVideo: "NVIDIA 9800 GT 1 GB / AMD HD 4870",
                armazenamento: "120 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5 3470 de 3,2 GHz or AMD X8 FX-8350 de 4 GHz",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GTX 660 2 GB or AMD HD7870 2 GB",
                directX: "DirectX 10",
                rede: "Conexão de Internet banda larga",
                armazenamento: "120 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Ação",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
              usuario: "ThunderGod",
            comentario: "O modo multiplayer é incrível! Jogar com amigos torna a experiência ainda mais divertida e envolvente."
            },

            negativos:{
                usuario: "GhostRider",
            comentario: "O modo multiplayer é péssimo. Muitos problemas de conexão e a comunidade é tóxica. Não vale a pena."
            }
        }
    },
    //EA SPORTS FC™ 24
    {
        id: 34,
        nome: "EA SPORTS FC™ 24",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/EASPORTSFC24/EASPORTSFC241.jpg",
            imagem2: "./images/imagens-descricao-jogos/EASPORTSFC24/EASPORTSFC242.jpg",
            imagem3: "./images/imagens-descricao-jogos/EASPORTSFC24/EASPORTSFC243.jpg",
            imagem4: "./images/imagens-descricao-jogos/EASPORTSFC24/EASPORTSFC244.jpg",
        },
        descricao: `Lançado em 2024, o jogo marca uma nova era para a franquia anteriormente conhecida como "FIFA", após a separação da EA e da FIFA.
        <br>
        "EA SPORTS FC™ 24" traz diversas novidades e melhorias em relação aos seus predecessores, mantendo a essência do futebol virtual que a série construiu ao longo dos anos.
        <br>
        HyperMotion V: Uma tecnologia de captura de movimento avançada que utiliza dados de mais de 180 jogos reais de futebol, proporcionando animações e movimentações dos jogadores mais realistas e autênticas.
        <br>
        PlayStyles: Uma nova mecânica que permite personalizar jogadores com habilidades especiais e estilos de jogo únicos, aumentando a diversidade de táticas e estratégias.
        <br>
        Ultimate Team Evolutions: Permite aos jogadores desenvolverem e melhorarem suas cartas de jogadores ao longo do tempo, criando uma conexão mais profunda com suas equipes.`,
        valor: 71.80,
        lancamento: "28/09/2023",
        desenvolvido: "EA Canada",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-6600K de 3,50 GHz ou AMD Ryzen 5 1600 de 3,2 GHz",
                memoria: "8 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1050 Ti de 4 GB ou AMD Radeon RX 570 de 4 GB",
                armazenamento: "100 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i7-6700 de 3,40 GHz ou AMD Ryzen 7 2700X de 3,7 GHz",
                memoria: "12 GB de RAM",
                placaVideo: "NVIDIA GeForce GTX 1660 ou AMD RX 5600 XT",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Ação",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
                usuario: "IceQueen",
            comentario: "A customização dos personagens é excelente. É possível criar avatares únicos e personalizados. Muito divertido!"
            },

            negativos:{
                usuario: "FireMage",
            comentario: "A customização dos personagens é muito limitada. Poucas opções disponíveis, o que torna tudo muito genérico."
            }
        }
    },
    //Baldur's Gate 3
    {
        id: 35,
        nome: "Baldur's Gate 3",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/BaldursGate3/BaldursGate31.jpg",
            imagem2: "./images/imagens-descricao-jogos/BaldursGate3/BaldursGate32.jpg",
            imagem3: "./images/imagens-descricao-jogos/BaldursGate3/BaldursGate33.jpg",
            imagem4: "./images/imagens-descricao-jogos/BaldursGate3/BaldursGate34.jpg",
        },
        descricao: `O jogo se passa no universo de Dungeons & Dragons, especificamente nos Reinos Esquecidos. A história começa quando o personagem do jogador e vários outros são sequestrados por mind flayers (devoradores de mentes) e infectados com larvas parasitárias que eventualmente transformam suas vítimas em mind flayers. Após escapar do cativeiro, o jogador deve encontrar uma maneira de remover as larvas, enfrentando diversos desafios e tomando decisões que influenciam o desenrolar da trama.
        <br>
        <br>
        Principais Elementos do Jogo:
        Combate Tático por Turnos: Inspirado pelo sistema de D&D, os combates são estratégicos e exigem uso inteligente de habilidades, magias e posicionamento.
        <br>
        Exploração e Interação: O mundo é repleto de segredos, NPCs e missões secundárias que enriquecem a experiência de jogo.
        <br>
        Decisões e Consequências: As escolhas do jogador afetam diretamente o desenrolar da história e os relacionamentos com outros personagens.
        <br>
        Multijogador: Possibilidade de jogar em modo cooperativo online com outros jogadores.`,
        valor: 159.90,
        lancamento: "03/08/2023",
        desenvolvido: "Larian Studios",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: " Intel I5 4690 / AMD FX 8350",
                memoria: "8 GB de RAM",
                placaVideo: "Nvidia GTX 970 / RX 480 (4GB+ of VRAM)",
                armazenamento: "150 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel i7 8700K / AMD r5 3600",
                memoria: "16 GB de RAM",
                placaVideo: "Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)",
                directX: "DirectX 11",
                rede: "Conexão de Internet banda larga",
                armazenamento: "150 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Aventura, RPG, Estratégia",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "WindWalker",
                comentario: "Os eventos sazonais são uma ótima adição! Sempre há algo novo para descobrir e desafios para completar."
            },

            negativos:{
                 usuario: "StoneGiant",
            comentario: "Os eventos sazonais são desinteressantes e repetitivos. Não acrescentam nada de novo ou emocionante ao jogo."
            }
        }
    },
    //Forza Horizon 4
    {
        id: 36,
        nome: "Forza Horizon 4",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/ForzaHorizon4/ForzaHorizon41.jpg",
            imagem2: "./images/imagens-descricao-jogos/ForzaHorizon4/ForzaHorizon42.jpg",
            imagem3: "./images/imagens-descricao-jogos/ForzaHorizon4/ForzaHorizon43.jpg",
            imagem4: "./images/imagens-descricao-jogos/ForzaHorizon4/ForzaHorizon44.jpg",
        },
        descricao: `O jogo é ambientado em uma representação fictícia da Grã-Bretanha, apresentando localidades inspiradas em áreas reais da Escócia, Inglaterra e País de Gales. "Forza Horizon 4" se destaca pela introdução de estações dinâmicas, que mudam a cada semana no mundo do jogo, afetando a jogabilidade, as condições das estradas e o ambiente visual.
        <br>
        <br>
        Principais Elementos do Jogo:
        Estações Dinâmicas: As quatro estações (primavera, verão, outono e inverno) mudam a cada semana, trazendo novas condições climáticas, eventos e oportunidades de corrida.
        <br>
        Grande Variedade de Carros: O jogo conta com mais de 450 carros licenciados de diversos fabricantes, cada um com suas próprias características e opções de personalização.
        <br>
        Modo Online Compartilhado: Os jogadores podem explorar o mundo e competir em eventos ao lado de outros jogadores em tempo real, em um ambiente online compartilhado.
        <br>
        Criação de Rotas: A ferramenta "Route Creator" permite que os jogadores criem suas próprias corridas e eventos personalizados.
        <br>
        Horizon Life: O modo campanha inclui uma série de objetivos e desafios para os jogadores completarem, com recompensas e progressão.`,
        valor: 49.80,
        lancamento: "09/03/2021",
        desenvolvido: "Playground Games",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                memoria: "8 GB de RAM",
                placaVideo: "NVidia 650TI OR AMD R7 250x",
                armazenamento: "80 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel i7-3820 @ 3.6Ghz",
                memoria: "12 GB de RAM",
                placaVideo: "NVidia GTX 970 OR NVidia GTX 1060 3GB OR AMD R9 290x OR AMD RX 470",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "100 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Corrida",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: "L",
        comentarios:{
            positivos: { 
                 usuario: "IronKnight",
            comentario: "A interface do usuário é muito intuitiva e fácil de navegar. Não tive dificuldades para encontrar o que precisava."
            },

            negativos:{
                usuario: "BloodWarrior",
            comentario: "A interface do usuário é confusa e mal projetada. Muitas vezes fiquei perdido tentando achar certas funcionalidades."
            }
        }
    },
    //The Witcher 3: Wild Hunt
    {
        id: 37,
        nome: "The Witcher 3: Wild Hunt",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/TheWitcher3WildHunt/TheWitcher3WildHunt1.jpg",
            imagem2: "./images/imagens-descricao-jogos/TheWitcher3WildHunt/TheWitcher3WildHunt2.jpeg",
            imagem3: "./images/imagens-descricao-jogos/TheWitcher3WildHunt/TheWitcher3WildHunt3.jpg",
            imagem4: "./images/imagens-descricao-jogos/TheWitcher3WildHunt/TheWitcher3WildHunt4.jpg",
        },
        descricao: `O jogo se passa em um universo de fantasia sombria conhecido como "O Continente". Os jogadores assumem o papel de Geralt de Rivia, um caçador de monstros geneticamente aprimorado conhecido como "bruxo". A história principal gira em torno da busca de Geralt por sua filha adotiva, Ciri, que está fugindo da mística e mortal "Caçada Selvagem".`,
        valor: 49.80,
        lancamento: "18/05/2015",
        desenvolvido: "CD PROJEKT RED",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel CPU Core i5-2500K 3.3GHz",
                memoria: "6 GB de RAM",
                placaVideo: "Nvidia GPU GeForce GTX 660",
                armazenamento: "50 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-7400 / Ryzen 5 1600",
                memoria: "8 GB de RAM",
                placaVideo: "Nvidia GTX 1070 / Radeon RX 480",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "50 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 16,
        comentarios:{
            positivos: { 
                usuario: "GoldenEagle",
            comentario: "O suporte técnico é excelente. Todas as minhas dúvidas foram resolvidas rapidamente e com muita eficiência."
            },

            negativos:{
                usuario: "SilverFox",
            comentario: "O suporte técnico é muito lento e ineficiente. Tive que esperar dias para receber uma resposta que nem solucionou meu problema."
            }
        }
    },
    //CyberPunk 2077
    {
        id: 38,
        nome: "CyberPunk 2077",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/CyberPunk2077/CyberPunk20771.jpg",
            imagem2: "./images/imagens-descricao-jogos/CyberPunk2077/CyberPunk20772.jpg",
            imagem3: "./images/imagens-descricao-jogos/CyberPunk2077/CyberPunk20773.jpg",
            imagem4: "./images/imagens-descricao-jogos/CyberPunk2077/CyberPunk20774.jpg",
        },
        descricao: `O jogo se passa em Night City, um mundo aberto distópico com seis regiões distintas.

        Os jogadores assumem o papel de V, um mercenário cuja personalização abrange aparência, habilidades e histórico. A narrativa principal segue V na busca por um implante cibernético que supostamente concede a imortalidade, enquanto se envolve com diversas facções e personagens, incluindo o enigmático Johnny Silverhand, interpretado por Keanu Reeves.
        <br>
        <br>
        O gameplay combina exploração em mundo aberto com elementos de tiro em primeira pessoa e combate corpo a corpo. As escolhas dos jogadores influenciam fortemente a progressão e o desfecho da história, permitindo múltiplos finais. "Cyberpunk 2077" também se destaca por seu design gráfico detalhado, narrativa complexa e temas adultos, abordando questões sociais, políticas e morais.`,
        valor: 99.90,
        lancamento: "10/11/2020",
        desenvolvido: "CD PROJEKT RED",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Core i7-6700 or Ryzen 5 1600",
                memoria: "12 GB de RAM",
                placaVideo: "GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380",
                armazenamento: "70 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Core i7-12700 or Ryzen 7 7800X3D",
                memoria: "16 GB de RAM",
                placaVideo: "GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "70 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "CrimsonBlade",
            comentario: "Os gráficos em alta definição são de tirar o fôlego. A qualidade visual realmente eleva a experiência do jogo."
            },

            negativos:{
                 usuario: "VoidWalker",
            comentario: "Os gráficos são de baixa qualidade e parecem desatualizados. O jogo precisa de uma grande atualização visual."
            }
        }
    },
    //Street Fighter 6
    {
        id: 39,
        nome: "Street Fighter 6",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/StreetFighter6/StreetFighter61.jpg",
            imagem2: "./images/imagens-descricao-jogos/StreetFighter6/StreetFighter62.jpg",
            imagem3: "./images/imagens-descricao-jogos/StreetFighter6/StreetFighter63.jpg",
            imagem4: "./images/imagens-descricao-jogos/StreetFighter6/StreetFighter64.jpg",
        },
        descricao: ``,
        valor: 124.50,
        lancamento: "02/06/2023",
        desenvolvido: "CAPCOM Co., Ltd.",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5-7500 / AMD Ryzen 3 1200",
                memoria: "8 GB de RAM",
                placaVideo: "GTX1060 (VRAM 6GB) / Radeon RX 580 (VRAM 4GB)",
                armazenamento: "60 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i7 8700 / AMD Ryzen 5 3600",
                memoria: "16 GB de RAM",
                placaVideo: "RTX2070 / Radeon RX 5700XT",
                directX: "DirectX 12",
                rede: "Conexão de Internet banda larga",
                armazenamento: "60 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "RPG",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 12,
        comentarios:{
            positivos: { 
                usuario: "SolarFlare",
            comentario: "O enredo é profundo e emocional. Fui completamente envolvida pela história e não consegui parar de jogar até terminar."
            },

            negativos:{
                 usuario: "DarkShadow",
            comentario: "O enredo é fraco e sem emoção. Não há nada que me prenda ou me faça querer continuar jogando."
            }
        }
    },
    //Grand Theft Auto V
    {
        id: 40,
        nome: "Grand Theft Auto V",
        imagens: {
            imagem1: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP1.jpg",
            imagem2: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP2.jpeg",
            imagem3: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP3.jpg",
            imagem4: "./images/imagens-descricao-jogos/GTA5EdicaoPremium/GTA5EP4.jpg",
        },
        descricao: `Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade onde não podem confiar em ninguém, nem mesmo um no outro.`,
        valor: 38.63,
        lancamento: "14/05/2020",
        desenvolvido: "Rockstar North",
        requisitos: {
            minimos: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core 2 Quad CPU Q6600 de 2,40 GHz",
                memoria: "4 GB de RAM",
                placaVideo: "NVIDIA 9800 GT 1 GB / AMD HD 4870",
                armazenamento: "120 GB de espaço disponível",
            },
            recomendados: {
                sistemaOperacional: "Windows® 10 64-bit",
                processador: "Intel Core i5 3470 de 3,2 GHz or AMD X8 FX-8350 de 4 GHz",
                memoria: "16 GB de RAM",
                placaVideo: "NVIDIA GTX 660 2 GB or AMD HD7870 2 GB",
                directX: "DirectX 10",
                rede: "Conexão de Internet banda larga",
                armazenamento: "120 GB de espaço disponível",
                placaSom: " "
            }
        },
        genero: "Ação",
        recurso: "Online Multiplayer",
        classificacaoIndicativa: 18,
        comentarios:{
            positivos: { 
                usuario: "CelestialDragon",
            comentario: "Os quebra-cabeças são bem elaborados e desafiadores. Cada um exige pensamento crítico e é muito satisfatório resolver."
            },

            negativos:{
                usuario: "InfernalDemon",
            comentario: "Os quebra-cabeças são chatos e repetitivos. Fiquei entediada rapidamente e não senti nenhuma satisfação em resolvê-los."
            }
        }
    },
];
