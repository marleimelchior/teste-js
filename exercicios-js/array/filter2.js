Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray

}

const produtos = [
    {nome: "notebook", preco: 3500, fragil: true},
    {nome: "Geladeira", preco: 5000, fragil: true},
    {nome: "copo de vidro", preco: 13.00, fragil: true},
    {nome: "copo de plastico", preco: 4.20, fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))