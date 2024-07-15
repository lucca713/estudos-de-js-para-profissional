//deixnado a classe com a opcao de ser exportada para arquivos de fora, podendo ser usada em qualqeur outro arquivo
export class Cliente{
    nome;
    _cpf;
    
    get cpf(){
         return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}