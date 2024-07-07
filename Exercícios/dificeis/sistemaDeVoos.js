class Passageiro {
    constructor(id, nome) {
      this.id = id;
      this.nome = nome;
    }
  
    obterInfo() {
      return `ID: ${this.id}, Nome: ${this.nome}`;
    }
  }
  
  class Voo {
    constructor(numeroVoo, origem, destino, capacidade) {
      this.numeroVoo = numeroVoo;
      this.origem = origem;
      this.destino = destino;
      this.capacidade = capacidade;
      this.passageiros = [];
    }
  
    adicionarPassageiro(passageiro) {
      if (this.passageiros.length < this.capacidade) {
        this.passageiros.push(passageiro);
      } else {
        console.log('Capacidade máxima atingida!');
      }
    }
  
    removerPassageiro(id) {
      this.passageiros = this.passageiros.filter(passageiro => passageiro.id !== id);
    }
  
    listarPassageiros() {
      this.passageiros.forEach(passageiro => console.log(passageiro.obterInfo()));
    }
  
    obterInfo() {
      return `Número do Voo: ${this.numeroVoo}, Origem: ${this.origem}, Destino: ${this.destino}, Capacidade: ${this.capacidade}, Passageiros: ${this.passageiros.length}`;
    }
  }
  
  class SistemaDeReservas {
    constructor() {
      this.voos = [];
    }
  
    adicionarVoo(numeroVoo, origem, destino, capacidade) {
      const voo = new Voo(numeroVoo, origem, destino, capacidade);
      this.voos.push(voo);
    }
  
    removerVoo(numeroVoo) {
      this.voos = this.voos.filter(voo => voo.numeroVoo !== numeroVoo);
    }
  
    listarVoos() {
      this.voos.forEach(voo => console.log(voo.obterInfo()));
    }
  }
  
  // Exemplo de uso
  const sistema = new SistemaDeReservas();
  sistema.adicionarVoo("AB123", "São Paulo", "Rio de Janeiro", 2);
  sistema.adicionarVoo("CD456", "Belo Horizonte", "Salvador", 3);
  
  const passageiro1 = new Passageiro(1, "Alice");
  const passageiro2 = new Passageiro(2, "Bob");
  const passageiro3 = new Passageiro(3, "Charlie");
  
  const voo1 = sistema.voos[0];
  voo1.adicionarPassageiro(passageiro1);
  voo1.adicionarPassageiro(passageiro2);
  voo1.listarPassageiros();
  
  sistema.listarVoos();
  