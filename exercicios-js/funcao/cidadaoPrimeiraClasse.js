// criar de forma literal
function fun1(){
    
}
// armazernar em uma variavel
const fun2 = function(){

}
//armazenar em um array
const array = [function(a, b){ return a + b }, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function(){return "opa"}
console.log(obj.falar())

//passar função como param
function run(fun) {
    fun
    }
    run(function(){console.log("executando...")})

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincomais = soma(2, 3)
cincomais(4)