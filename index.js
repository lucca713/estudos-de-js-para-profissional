class Cliente{
    nome;
    cpf;
    
}

class Contacorrente{
    agencia;
    
    #saldo = 0; 

    sacar(valor){
        if(this.#saldo >= valor){

            this.#saldo -= valor;
        }

    }  

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            
        }
    }
}


const contacorrenteRicardo = new Contacorrente();  
const cliente1 = new Cliente();


contacorrenteRicardo.agencia = 1001;

cliente1.nome = "Ricardo";
cliente1.cpf = 40354419889;



contacorrenteRicardo.depositar(100);
contacorrenteRicardo.depositar(100);



contacorrenteRicardo.sacar(20);

console.log(contacorrenteRicardo);