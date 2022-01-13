const seguencia = {
    _valor: 1, // convenção
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(seguencia.valor, seguencia.valor)
seguencia.valor = 1000
console.log(seguencia.valor, seguencia.valor)
seguencia.valor = 900
console.log(seguencia.valor, seguencia.valor)