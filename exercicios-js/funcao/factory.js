function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("notebook", 3659.99))
console.log(criarProduto("ipad", 999.65))
