class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("joao")
p1.falar()

const criarPessoas = function(nome)  {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const p2 = criarPessoas("joao")