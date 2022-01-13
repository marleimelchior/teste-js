//closure e o escopo criado quando uma função e declarada
// esse escopo permite a função acessar e manipular variaves externas a função
//contexto lexico em ação!

const x = "global"

function fora(){
    const x = "local"
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())