//utilizando modulos para chamar as classes em arquivos separados
import { Cliente } from "./Cliente.js";
import { Contacorrente } from "./ContaCorrente.js";
//nome da classe from nome do arquivo que ela se encontra

//criando uma nova conta corrente
const contacorrenteRicardo = new Contacorrente(); 
const conta2 = new Contacorrente();
const cliente1 = new Cliente();
const cliente2 = new Cliente();

//colocando informcao
cliente1.nome = "Ricardo"
cliente1.cpf = 40354419889;
contacorrenteRicardo.agencia = 1001;
contacorrenteRicardo.cliente = cliente1;

cliente2.nome = "Ana"
cliente2.cpf = 489549354;
conta2.agencia = 1002;
conta2.cliente = cliente2;

contacorrenteRicardo.depositar(500);
contacorrenteRicardo.transferir(200,conta2);

console.log(conta2);




// da undefined no retorno do programa pq a varaivael saldo esra como privado