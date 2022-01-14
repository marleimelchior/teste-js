Object.prototype.attr0 = "0"// não faça isso em casa!
const avo = {att1: "A"}
const pai = {__proto__: avo, att2: "B"}
const filho = {__proto__: pai, att3: "C"}
console.log(filho.attr0, filho.att1, filho.att2, filho.att3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velAtual
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`

    }
}
const ferrari = {
    modelo: "f40",
    velMax: 324 // shadowing
}
const volvo = {
    modelo: "v40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
    Object.setPrototypeOf(ferrari, carro)
    Object.setPrototypeOf(volvo, carro)

    console.log(ferrari)
    console.log(volvo)

    volvo.acelerarMais(100)
    console.log(volvo.status())

    ferrari.acelerarMais(200)
    console.log(ferrari.status())


