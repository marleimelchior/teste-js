const fs = require('fs')

//sincrono...
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})
//acessar o arquivo jason

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, aquivos) => {
    console.log('conteudo da pasta...')
    console.log(arquivos)
})