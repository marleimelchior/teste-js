const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req,res) =>{
    res.write("bom dia!")
    res.end
}).listen(9098) //porta no brownse