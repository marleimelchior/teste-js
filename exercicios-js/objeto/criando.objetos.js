//usando a notação literal
const obj1 = {
    nome: "asdqwe"
}
console.log(obj1)

const obj2 = new Object
console.log(obj2)

function Produto(nome, valor, descont) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return valor * (1 - descont)
    }
}
const p1 = new Produto("caneta", 7.99, 0.15)
const p2 = new Produto("lapis", 1.50, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
