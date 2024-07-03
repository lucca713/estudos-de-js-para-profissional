console.log('trabalhando com condicionais ');

//cria a lista
const listaDeDestino = new Array(

    'salvador', 'sao paulo', 'rio de janeiro','Bahia'
);

const idadeComprador = 18;

console.log(listaDeDestino);

if( idadeComprador >= 18 || estaAcompanhado == true){
    console.log('comprador eh maior de idade');
    listaDeDestino.splice(1,1);

}else{

    console.log(`comprador nao eh maior de idade nao posso vender ele tem ${idadeComprador}`);
}



console.log(listaDeDestino);

