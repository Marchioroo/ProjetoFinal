class Tarefa {
    constructor(id, descricao) {
      this.id = id;
      this.descricao = descricao;
      this.concluida = false;
    }
  
    concluir() {
      this.concluida = true;
    }
  
    reabrir() {
      this.concluida = false;
    }
  
    obterInfo() {
      return `ID: ${this.id}, Descrição: ${this.descricao}, Concluída: ${this.concluida}`;
    }
  }
  
  class GerenciadorDeTarefas {
    constructor() {
      this.tarefas = [];
      this.proximoId = 1;
    }
  
    adicionarTarefa(descricao) {
      const tarefa = new Tarefa(this.proximoId++, descricao);
      this.tarefas.push(tarefa);
    }
  
    removerTarefa(id) {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }
  
    listarTarefas() {
      this.tarefas.forEach(tarefa => console.log(tarefa.obterInfo()));
    }
  
    concluirTarefa(id) {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
      if (tarefa) {
        tarefa.concluir();
      }
    }
  }
  
  
  const gerenciador = new GerenciadorDeTarefas();
  gerenciador.adicionarTarefa("Aprender JavaScript");
  gerenciador.adicionarTarefa("Estudar classes em JS");
  gerenciador.listarTarefas();
  gerenciador.concluirTarefa(1);
  gerenciador.listarTarefas();
  