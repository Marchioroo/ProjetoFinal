// Classe Livro
class Livro {
    constructor(id, titulo, autor) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
  
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
      } else {
        console.log('Livro não está disponível.');
      }
    }
  
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
      } else {
        console.log('Livro já está disponível.');
      }
    }
  
    obterInfo() {
      return `ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Disponível: ${this.disponivel}`;
    }
  }
  

  class Usuario {
    constructor(id, nome) {
      this.id = id;
      this.nome = nome;
      this.livrosEmprestados = [];
    }
  
    emprestarLivro(livro) {
      if (livro.disponivel) {
        livro.emprestar();
        this.livrosEmprestados.push(livro);
      } else {
        console.log(`Livro "${livro.titulo}" não está disponível para empréstimo.`);
      }
    }
  
    devolverLivro(idLivro) {
      const index = this.livrosEmprestados.findIndex(livro => livro.id === idLivro);
      if (index !== -1) {
        this.livrosEmprestados[index].devolver();
        this.livrosEmprestados.splice(index, 1);
      } else {
        console.log(`Livro com ID ${idLivro} não está entre os emprestados.`);
      }
    }
  
    obterInfo() {
      const livros = this.livrosEmprestados.map(livro => livro.obterInfo()).join('; ');
      return `ID: ${this.id}, Nome: ${this.nome}, Livros Emprestados: [${livros}]`;
    }
  }
  

  class Biblioteca {
    constructor() {
      this.livros = [];
      this.usuarios = [];
      this.proximoIdLivro = 1;
      this.proximoIdUsuario = 1;
    }
  
    adicionarLivro(titulo, autor) {
      const livro = new Livro(this.proximoIdLivro++, titulo, autor);
      this.livros.push(livro);
    }
  
    removerLivro(id) {
      this.livros = this.livros.filter(livro => livro.id !== id);
    }
  
    listarLivros() {
      this.livros.forEach(livro => console.log(livro.obterInfo()));
    }
  
    adicionarUsuario(nome) {
      const usuario = new Usuario(this.proximoIdUsuario++, nome);
      this.usuarios.push(usuario);
    }
  
    removerUsuario(id) {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    }
  
    listarUsuarios() {
      this.usuarios.forEach(usuario => console.log(usuario.obterInfo()));
    }
  }
  

  const biblioteca = new Biblioteca();
  
  biblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien");
  biblioteca.adicionarLivro("1984", "George Orwell");
  
  biblioteca.adicionarUsuario("Alice");
  biblioteca.adicionarUsuario("Bob");
  
  biblioteca.listarLivros();
  biblioteca.listarUsuarios();
  
  const usuarioAlice = biblioteca.usuarios[0];
  const livro1984 = biblioteca.livros[1];
  
  usuarioAlice.emprestarLivro(livro1984);
  biblioteca.listarLivros();
  biblioteca.listarUsuarios();
  
  usuarioAlice.devolverLivro(livro1984.id);
  biblioteca.listarLivros();
  biblioteca.listarUsuarios();
  