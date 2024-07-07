class Cliente{
    nome;
    cpf;
    
}

class Contacorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){

            this.saldo -= valor;
        }

    }  
}


const contacorrenteRicardo = new Contacorrente();
const cliente1 = new Cliente();

contacorrenteRicardo.saldo = 0;
contacorrenteRicardo.agencia = 1001;

cliente1.nome = "Ricardo";
cliente1.cpf = 40354419889;

console.log(contacorrenteRicardo.saldo);

contacorrenteRicardo.saldo = 100;

console.log(contacorrenteRicardo.saldo);

contacorrenteRicardo.sacar(20);

console.log(contacorrenteRicardo.saldo);