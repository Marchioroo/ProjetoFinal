# CODERGAME - Site de Jogos

Este projeto é um **site de jogos** desenvolvido com **JavaScript**, utilizando técnicas de otimização como **lazy loading**, **cache**, e **localStorage**. O objetivo é proporcionar uma experiência rápida e eficiente para os usuários, garantindo que o conteúdo seja carregado de forma otimizada.

## Tecnologias Utilizadas

- **HTML5** & **CSS3** – Estrutura e estilo do site.
- **JavaScript (JS)** – Lógica de interação e manipulação de dados.
- **Lazy Loading** – Carregamento eficiente de imagens e recursos, apenas quando necessário.
- **localStorage** – Armazenamento local para salvar preferências do usuário e o progresso no jogo.
- **Cache** – Utilização de cache para otimizar o tempo de carregamento e reduzir a necessidade de requisições repetidas.
- **API de Web Storage** – Para armazenar configurações e progresso do usuário.

## Funcionalidades

1. **Listagem de Jogos:**
   - Exibe uma lista de jogos disponíveis, com miniaturas e descrições.
   - Utiliza **lazy loading** para carregar imagens e recursos à medida que o usuário rola a página.

2. **Armazenamento Local (localStorage):**
   - Salva o progresso do usuário nos jogos utilizando **localStorage**, permitindo que o jogador continue de onde parou em futuras visitas.

3. **Cache para Otimização:**
   - Arquivos estáticos são armazenados em cache, melhorando o desempenho e reduzindo o tempo de carregamento nas visitas subsequentes.

4. **Interface Responsiva:**
   - O design é **responsivo**, garantindo que o site seja acessível em dispositivos móveis, tablets e desktops.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/jogo-web.git
