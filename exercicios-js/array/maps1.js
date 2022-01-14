const carrinho = [
    '{"nome": "borracha", "preco": "3.45"}',
    '{"nome": "caderno", "preco": "13.40"}',
    '{"nome": "caderneta", "preco": "10.50"}',
    '{"nome": "caneta", "preco": "1.50"}'
]

const paraObjeto = json => JSON.parse(json)//altera um arquivo jason para objeto
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)