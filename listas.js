console.log('trabalhando com listas');

//cria a lista
const listaDeDestino = new Array(

    'salvador', 'sao paulo', 'rio de janeiro'
);

//coloca um novo valor na lista
listaDeDestino.push('curitiba');

//printa a lista
console.log(listaDeDestino);

listaDeDestino.splice(1,1);

console.log(listaDeDestino);

console.log(listaDeDestino[1]);