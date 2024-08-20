//parametros/argumentos
//funcoa sem retorno 
function exibeInfosEstudante(nome, nota){

    console.log(`o nome eh ${nome}, nota: ${nota}`);
}


//funcao com retorno, parece C++

function conta(valor1, valor2){
    if(valor2>0){
        return valor1/valor2;
    }else{
        return "por favor não usar o numero 0 para fazer a divisao";
    }

}

const contaDivisao = conta(1,2);


const contaDivisao2 = conta(1,0);

console.log(`O valor da divisao dos valores informados foi: ${contaDivisao}`);
console.log(`O valor da divisao dos valores informados foi: ${contaDivisao2}`);


exibeInfosEstudante('lucca', 10);