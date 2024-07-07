class Hotel {
    constructor(numeroQuarto, tipo) {
        this.numeroQuarto = numeroQuarto;
        this.tipo = tipo;
        this.disponivel = true;
    }

    reservar() {
        if (this.disponivel) {
            this.disponivel = false;
        } else {
            console.log('Quarto ja esta sendo alugado!');
        }
    }

    liberar() {
        if (!this.disponivel) {
            this.disponivel = true;
        } else {
            console.log('Quarto ja esta disponivel!')
        }
    }


    obterinfo(){
        console.log(`O quarto: ${this.numeroQuarto}, Tipo ${this.tipo} disponivel ${this.disponivel}`);
    }

}


const quarto = new Hotel(1002,"Simples");
quarto.obterinfo();

quarto.reservar();
quarto.obterinfo();
