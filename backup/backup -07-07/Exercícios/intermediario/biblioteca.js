class Livro{
    constructor(titulo,autor,anoPublicacao,disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }

    emprestar(){
        if(this.disponivel == true){
            this.disponivel = false
        }else{
            console.log("O livro não esta mais disponível");
        }
    }

    devolver(){
        if(this.disponivel == false){
            this.disponivel = true;
        }else{
            console.log("O livro está disponivel");
        }
    }

    obterInfo() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Disponível: ${this.disponivel}`;
      }
}

const livro1 = new Livro("1984", "George Orwell", 1949);
console.log(livro1.obterInfo()); // Título: 1984, Autor: George Orwell, Ano: 1949, Disponível: true
livro1.emprestar();
console.log(livro1.obterInfo()); // Título: 1984, Autor: George Orwell, Ano: 1949, Disponível: false
livro1.devolver();
console.log(livro1.obterInfo()); //