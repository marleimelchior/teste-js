Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray

}




const carrinho = [
    '{"nome": "borracha", "preco": "3.45"}',
    '{"nome": "caderno", "preco": "13.40"}',
    '{"nome": "caderneta", "preco": "10.50"}',
    '{"nome": "caneta", "preco": "1.50"}'
]

const paraObjeto = json => JSON.parse(json)//altera um arquivo jason para objeto
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)