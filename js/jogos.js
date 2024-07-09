const jogos = [
    //Dead By Daylight
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
    //Black Myth: Wukong
    {
        id: 2,
        nome: "Black Myth: Wukong",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong1.jpg",
            imagem2: "/images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong2.jpeg",
            imagem3: "/images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong3.jpeg",
            imagem4: "/images/imagens-descricao-jogos/BlackMythWukong/BlackMythWukong4.webp",
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
        }
    },
    //Final Fantasy 14: Dawntrail
    {
        id: 3,
        nome: "Final Fantasy 14: Dawntrail",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // world of warcraft war within
    {
        id: 4,
        nome: "World of Warcraft War Within",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // the legend of zelda: echoes
    {
        id: 5,
        nome: "The Legend of Zelda: Echoes",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: 'The Legend of Zelda: Echoes é um novo capítulo na aclamada série de jogos The Legend of Zelda. Nesta aventura, Link explora um mundo vasto e interconectado cheio de mistérios, puzzles e inimigos formidáveis. O jogo introduz novos elementos de jogabilidade e uma narrativa rica que se aprofunda na história de Hyrule e seus personagens icônicos. Com gráficos impressionantes e trilha sonora épica, Echoes promete ser uma experiência inesquecível para os fãs da franquia.',
        valor: 229.90,
        lancamento: "26/09/2024",
        desenvolvido: "Nintendo",
        // requisitos: {
        //     minimos: {
        //         sistemaOperacional: "Windows 10 64-bit",
        //         processador: "Intel Core i5-3450 / AMD FX 8300",
        //         memoria: "4 GB de RAM (8 GB se usar gráficos integrados)",
        //         placaVideo: "NVIDIA GeForce GTX 760 / AMD Radeon RX 560 / Intel UHD 630 (45W)",
        //         armazenamento: "100 GB de espaço disponível",
        //     },
        //     recomendados: {
        //         sistemaOperacional: "Windows® 10 64 bit",
        //         processador: "Intel Core i7-6700K / AMD Ryzen 7 2700X",
        //         memoria: "8 GB de RAM",
        //         placaVideo: "NVIDIA GeForce GTX 1080 / AMD Radeon RX Vega 64",
        //         directX: "Versão 11",
        //         rede: "Conexão de Internet banda larga",
        //         armazenamento: "100 GB de espaço disponível",
        //         placaSom: "Compatível com DirectX"
        //     }
        // }
    },
    // Dragon Ball: Sparking! Zero
    {
        id: 6,
        nome: "Dragon Ball: Sparking! Zero",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Call of Duty: Black Ops 6
    {
        id: 7,
        nome: "Call of Duty: Black Ops 6",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Super Mario Party Jamboree
    {
        id: 8,
        nome: "Super Mario Party Jamboree",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: 'Super Mario Party Jamboree é a mais nova edição da popular série de jogos de festa da Nintendo. O jogo apresenta uma variedade de minijogos divertidos e competitivos, com novos tabuleiros e modos de jogo para entreter jogadores de todas as idades. Os jogadores podem escolher entre uma ampla seleção de personagens icônicos do universo Mario e competir em desafios que testam habilidades, sorte e estratégia. Com gráficos coloridos, música animada e a opção de jogar com amigos localmente ou online, Super Mario Party Jamboree promete ser uma experiência de festa imperdível.',
        valor: 299.90,
        lancamento: "17/10/2024",
        desenvolvido: "Nintendo",
        // requisitos: {
        //     minimos: {
        //         sistemaOperacional: "Windows® 10 64-bit",
        //         processador: "Intel Core i3-4340 ou AMD FX-6300",
        //         memoria: "8 GB de RAM",
        //         placaVideo: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 ou Radeon HD 7950",
        //         armazenamento: "175 GB de espaço disponível",
        //     },
        //     recomendados: {
        //         sistemaOperacional: "Windows® 10 64 bit",
        //         processador: "Intel Core i5-2500K ou AMD Ryzen R5 1600X",
        //         memoria: "12 GB de RAM",
        //         placaVideo: "NVIDIA GeForce GTX 970 / GTX 1660 Super ou Radeon R9 390 / RX 580",
        //         directX: "Versão 12",
        //         rede: "Conexão de Internet banda larga",
        //         armazenamento: "175 GB de espaço disponível",
        //         placaSom: "Compatível com DirectX"
        //     }
        // }
    },
    // Life is Strange: Double Exposure
    {
        id: 9,
        nome: "Life is Strange: Double Exposure",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Mario & Luigi: Brothership
    {
        id: 10,
        nome: "Mario & Luigi: Brothership",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: 'Mario & Luigi: Brothership é um jogo de RPG de ação e aventura desenvolvido pela Nintendo. Este título leva os jogadores a uma nova e emocionante jornada no Reino dos Cogumelos, onde Mario e Luigi devem unir forças para enfrentar novos inimigos e resolver puzzles intrigantes. O jogo combina elementos clássicos da série Mario com mecânicas de combate por turnos e exploração, oferecendo uma experiência rica e envolvente. Com gráficos vibrantes, uma história cativante e personagens adoráveis, Mario & Luigi: Brothership promete ser uma aventura imperdível para fãs de todas as idades.',
        valor: 299.90,
        lancamento: "07/11/2024",
        desenvolvido: "Nintendo",
        // requisitos: {
        //     minimos: {
        //         sistemaOperacional: "Windows® 10 64-bit",
        //         processador: "Intel Core i3-4340 ou AMD FX-6300",
        //         memoria: "8 GB de RAM",
        //         placaVideo: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 ou Radeon HD 7950",
        //         armazenamento: "175 GB de espaço disponível",
        //     },
        //     recomendados: {
        //         sistemaOperacional: "Windows® 10 64 bit",
        //         processador: "Intel Core i5-2500K ou AMD Ryzen R5 1600X",
        //         memoria: "12 GB de RAM",
        //         placaVideo: "NVIDIA GeForce GTX 970 / GTX 1660 Super ou Radeon R9 390 / RX 580",
        //         directX: "Versão 12",
        //         rede: "Conexão de Internet banda larga",
        //         armazenamento: "175 GB de espaço disponível",
        //         placaSom: "Compatível com DirectX"
        //     }
        // }
    },
    // Dragon Quest III HD-2D Remake **
    {
        id: 11,
        nome: "Dragon Quest III HD-2D Remake",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: ' ',
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
        }
    },
    // Assassin’s Creed Shadows 
    {
        id: 12,
        nome: "Assassin’s Creed Shadows",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: ' ',
        valor: 299.90,
        lancamento: "15/11/2024",
        desenvolvido: "Ubisoft EntertainmentNintendo",
        requisitos: {
            minimos: {
                sistemaOperacional: "",
                processador: "",
                memoria: "",
                placaVideo: "",
                armazenamento: "",
            },
            recomendados: {
                sistemaOperacional: "",
                processador: "",
                memoria: "",
                placaVideo: "",
                directX: "",
                rede: "",
                armazenamento: "",
                placaSom: ""
            }
        }
    },
    // Epic Mickey: Rebrushed
    {
        id: 13,
        nome: "Epic Mickey: Rebrushed",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Indiana Jones and the Great Circle
    {
        id: 14,
        nome: "Indiana Jones and the Great Circle",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: 'Desvenda um dos maiores mistérios da história em Indiana Jones and the Great Circle™, uma aventura a solo em primeira pessoa, passada entre os acontecimentos de Raiders of the Lost Ark™ e The Last Crusade™. No ano de 1937, forças sinistras procuram por todo o planeta o segredo para um poder antigo relacionado com o Great Circle, e apenas uma pessoa os pode deter: Indiana Jones™. Torna-te o lendário arqueólogo num jogo cinemático de ação e aventura do premiado estúdio MachineGames, também responsável pela série Wolfenstein, e com produção executiva do designer de jogos galardoado com o prémio Hall of Fame, Todd Howard.',
        valor: 199.90,
        lancamento: "2024",
        desenvolvido: "MachineGames",
        requisitos: {
            minimos: {
                sistemaOperacional: "",
                processador: "",
                memoria: "",
                placaVideo: "",
                armazenamento: "",
            },
            recomendados: {
                sistemaOperacional: "",
                processador: "",
                memoria: "",
                placaVideo: "",
                directX: "",
                rede: "",
                armazenamento: "",
                placaSom: ""
            }
        }
    },
    // Microsoft Flight Simulator 2024
    {
        id: 15,
        nome: "Microsoft Flight Simulator 2024",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: '',
        valor: 399.90,
        lancamento: "2024",
        desenvolvido: "",
        requisitos: {
            minimos: {
                sistemaOperacional: "",
                processador: "",
                memoria: "",
                placaVideo: "",
                armazenamento: "",
            },
            recomendados: {
                sistemaOperacional: "",
                processador: "",
                memoria: "",
                placaVideo: "",
                directX: "",
                rede: "",
                armazenamento: "",
                placaSom: ""
            }
        }
    },
    // Silent Hill 2 Remake
    {
        id: 16,
        nome: "Silent Hill 2 Remake",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // HORIZON ZERO DOWN
    {
        id: 17,
        nome: "HORIZON ZERO DOWN",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        valor: 299.90,
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
        }
    },
    // THE KING OF FIGHTER XV
    {
        id: 18,
        nome: "THE KING OF FIGHTER XV",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Call of Duty®: Modern Warfare® III
    {
        id: 19,
        nome: "Call of Duty®: Modern Warfare® III",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Overcooked 2
    {
        id: 20,
        nome: "Overcooked 2",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Tekken 8®
    {
        id: 21,
        nome: "Tekken 8®",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Alan Wake 2
    {
        id: 22,
        nome: "Alan Wake 2",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: '',
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
        }
    },
    // Red Dead Redemption 2
    {
        id: 23,
        nome: "Red Dead Redemption 2",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // The Last of Us™ Part I - Deluxe
    {
        id: 24,
        nome: "The Last of Us™ Part I - Deluxe",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
        },
        descricao: `A história segue Joel, um contrabandista experiente, e Ellie, uma jovem corajosa com um segredo vital, enquanto eles viajam através dos Estados Unidos em busca de segurança em meio ao caos e perigos da pandemia. O jogo combina elementos de ação furtiva, exploração e resolução de quebra-cabeças, com uma narrativa emocionalmente intensa que explora temas de sobrevivência, sacrifício e redenção.
        <br>
        "The Last of Us Part I" recebeu aclamação da crítica por sua história cativante, personagens bem desenvolvidos e jogabilidade envolvente. Ele também foi elogiado por suas representações gráficas impressionantes e trilha sonora atmosférica.`,
        valor: 249.9,
        lancamento: "28/03/2023",
        desenvolvido: "Naughty Dog LLC",
        // requisitos: {
        //     minimos: {
        //         sistemaOperacional: "Windows® 10 64-bit",
        //         processador: "ntel® Core™ i7-4770K / AMD Ryzen 5 1500X",
        //         memoria: "12 GB de RAM",
        //         placaVideo: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        //         armazenamento: "150 GB de espaço disponível",
        //     },
        //     recomendados: {
        //         sistemaOperacional: "Windows® 10 64 bit",
        //         processador: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
        //         memoria: "12 GB de RAM",
        //         placaVideo: " Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        //         directX: "DirectX 12",
        //         rede: "Conexão de Internet banda larga",
        //         armazenamento: "150 GB de espaço disponível",
        //         placaSom: "Direct X Compatible"
        //     }
        // }
    },
    // Battlefield
    {
        id: 25,
        nome: "Battlefield",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Hogwarts Lagacy
    {
        id: 26,
        nome: "Hogwarts Lagacy",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
    // Valorant
    {
        id: 27,
        nome: "Valorant",
        imagens: {
            imagem1: "/images/imagens-descricao-jogos/Deadby/deadby1.webp",
            imagem2: "/images/imagens-descricao-jogos/Deadby/deadby2.jpg",
            imagem3: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
            imagem4: "/images/imagens-descricao-jogos/Deadby/deadby4.jpg",
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
        }
    },
];
