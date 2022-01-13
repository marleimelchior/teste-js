const fabricantes = ["mercedes", "audi", "bmW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)