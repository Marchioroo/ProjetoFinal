class Conta{
    constructor(numeroConta,titular,saldo){
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    deposito(deposito){
        this.saldo =  this.saldo + deposito;
        console.log(`O novo valor após depositar é de: ${this.saldo}`);
    }

    sacar(sacar){
        this.saldo =  this.saldo - sacar;
        console.log(` O novo valor do seu saldo depois de sacar é de ${this.saldo}`);
    }

    obterSaldo(){
        console.log( `O número da sua conta é: ${this.numeroConta} o titular é: ${this.titular} e o saldo atual é de ${this.saldo}`)
    }
}

const minhaConta = new Conta("1001", "Leonardo Marchioro", 1000);
minhaConta.obterSaldo();
minhaConta.deposito(1000);
minhaConta.sacar(1500);
minhaConta.obterSaldo();
