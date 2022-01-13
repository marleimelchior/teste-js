//par nome/valor
const saudacao = "opa" // contexto léxico 1

function exec(){
    const saudacao = "fala"//contexto lexico 2
    return saudacao
}
//objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereço: {
        logradouro : "Rua luiz de lima",
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)