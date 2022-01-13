const produto = new Object
produto.nome = "cadeira"
produto["marca do produto"] = "generica"
produto.preco = 332

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = {
    nome:"argo",
    valor: 46.000,
    endereço: {
        logradouro : "Ade quadra 01",
        numero: 256
    },
condutores: [{
    nome: "junior",
    idade: 19
},{
    nome: "ana",
    idade:42
}],
    calcularValorSeguro: function(){
        //....
    }
}

console.log(carro)