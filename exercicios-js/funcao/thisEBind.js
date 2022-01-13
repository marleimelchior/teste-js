const pessoa = {
    saudacao: "bom dia",
    hora:"19.40", 
    falar(){
        console.log(this.saudacao, this.hora)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e oo
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()