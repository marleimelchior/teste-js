// arrow function

const soma = (a, b) => a + b 
console.log(soma(2, 3))

// arrow function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.blind({})
lexico1()
lexico2()

function log(texto = "node") {
    console.log(texto)
}

log() // aqui ele assume o nome padrão
log("sou mais forte")

//operador rest

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
