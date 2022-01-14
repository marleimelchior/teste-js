const pilotos = ["vettel", "alonso", "raikkonen", "massa"]
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push("vestappen")
console.log(pilotos)// esse adiociona no array

pilotos.shift()// esse remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift("hamilto")//esse coloca no primeiro elemento do array
console.log(pilotos)

//splice pode add ou remover do array
pilotos.splice(2, 0, "bottas", "massa")
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

