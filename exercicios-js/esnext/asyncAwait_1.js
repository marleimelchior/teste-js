function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("executando promise...")
            resolve('Vishhh')
        }, tempo)
    })
}

async function executar(){
    await  esperarPor(2000)
    console.log('AsyncAwait 1')
    await esperarPor(2000)
    console.log('AsyncAwait 2')
    await esperarPor(2000)
    console.log('AsyncAwait 3')
    
}