for(let letra of "codigo"){
    console.log(letra)
}

const assuntosEcma = ['map', 'Set', 'Promise']

for(let i in assuntosEcma)  {
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', {abordado: false}]

])

for(let assunto of assuntosMap)  {
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}
