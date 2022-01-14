const produtos = [
    {nome: "notebook", preco: 3500, fragil: true},
    {nome: "Geladeira", preco: 5000, fragil: true},
    {nome: "copo de vidro", preco: 13.00, fragil: true},
    {nome: "copo de plastico", preco: 4.20, fragil: false}
]
console.log(produtos.filter(function(p){
    return p.preco > 4000
    //return false 
    //return true vai filter o que voce colocar no return

}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))
