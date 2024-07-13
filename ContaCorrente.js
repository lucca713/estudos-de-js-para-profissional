import { Cliente } from "./Cliente.js";

 
 export class Contacorrente{
    agencia;

    _cliente; //outro meio de deixar privado

    set cliente(novoValor){ // so aceita o cliente se for uma instacia do tipo Cliente, nao aceitar qualquer coisa
        if(novoValor instanceof Cliente)
       this._cliente = novoValor;  
    }

    get cliente(){ // para conseguir pegar valores separados
        return this._cliente;
    }

    
    //deixando varivel como privada
    #saldo = 0; 
    get saldo(){
        return this.#saldo;    
    }

    sacar(valor){
        if(this.#saldo >= valor){

            this.#saldo -= valor;
            return valor;
        }

    }  

    depositar(valor){
        if(valor > 0){
           return;    
        }
        this.#saldo += valor;
        
    }

    transferir(valor, conta){
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado);
    }
}