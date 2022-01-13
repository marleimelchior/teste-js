const pai = {nome: "pedro", corCabelo: "preto"}
const filha1 = Object.create(pai)
filha1.nome = "ana"

console.log(filha1.corCabelo)


const filha2 = Object.create(pai, {
    nome: { value: "bia", writable: false, enumerable: true}
})

console.log(filha2.nome)