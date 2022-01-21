const fs = require ('fs')

const produto = {
    nome: "celular",
    preco: 1250.00,
    desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!!')
})

//objeto foi convertido em formato json