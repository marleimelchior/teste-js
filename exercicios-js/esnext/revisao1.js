// let e const
{
    var a = 2
    let b = 3 
    console.log(b)
}
console.log(a)

// template string

const produto = 'ipad'
console.log(`${produto}e caro!` )

//destructuring

const [l, e, ...tras] = "futebol" //vai quebrarr a palavra e colocar em um array
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)  //destrutura o array

const {idade, nome} = {nome: 'ana', idade: 9}
console.log(idade, nome)