for(var i = 0; i < 10; i++){// usando o var o i fora do bloco vai ser visualizado 
    console.log(i)
}
console.log("i= ", i)

for(let j = 0; j < 10; j++){
    console.log(j)
}
console.log("i= ", j)// usando o let não vai ser visto pelo o laço
