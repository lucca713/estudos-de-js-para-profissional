//utilizando modulos para chamar as classes em arquivos separados
import { Cliente } from "./Cliente.js";
import { Contacorrente } from "./ContaCorrente.js";
//nome da classe from nome do arquivo que ela se encontra

//criando uma nova conta corrente
const contacorrenteRicardo = new Contacorrente(); 
const conta2 = new Contacorrente();
const cliente1 = new Cliente();
const cliente2 = new Cliente("ana", 403544198545);

//colocando informcao

contacorrenteRicardo.agencia = 1001;
contacorrenteRicardo.cliente = cliente1;


conta2.agencia = 1002;
conta2.cliente = cliente2;

contacorrenteRicardo.depositar(500);
contacorrenteRicardo.transferir(200,conta2);

console.log(conta2.cliente);




// da undefined no retorno do programa pq a varaivael saldo era como privado
//undefined quando alguem esquece,  null proposiatl