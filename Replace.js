/*
Primeiro exemplo usando CPF e uma String so para formatar.


const cpf = ' meu copf eh 40354419889';

const novoCpf = cpf.replace('40354419889','403.544.198-89');

console.log(novoCpf);
*/

/*
Segundo Exemplo tirando uma palavra

const Fraseexcluir = 'essa paravra: quarta-feira tem que sumir e essa';

const frase = Fraseexcluir.replace('quarta-feira','**********');

console.log(frase);
*/

//usando regex no modo global
const Fraseexcluir = 'essa paravra: quarta-feira tem que sumir e essa quarta-feira';

const frase = Fraseexcluir.replace(/quarta-feira/g,'**********');

console.log(frase);