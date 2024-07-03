console.log("\n Trabalhando ccom condicionais");
const listaDeDestinos = new Array(
    'Salvador',
    'Sao paulo',
    'Rio de Janeiro'    
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destino possivel: ");
console.log(listaDeDestinos);

const podeComprar = ( idadeComprador >=18 || estaAcompanhada == true)


let contador = 0;
let destinoExiste = false;
while(contador<3){

if(listaDeDestinos[contador]== destino){

    console.log("Destino existente");
    destinoExiste = true;
   

 }
 contador += 1;
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else {
    console.log("Desculpa tivemos um erro");
}

for(let cont = 0; cont < 3 ; cont +=1){

    if(listaDeDestinos[cont]== destino){

        console.log("Destino existente");
        destinoExiste = true;
       
     }
}