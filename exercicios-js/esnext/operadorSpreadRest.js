//operador ... rest(juntar) / spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const funcionario = {nome: "maria", salario: 52000}
const clone = {ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ["joao", "pedro", "gloria"]
const grupoFinal = ["maria", ...grupoA, "rafael"]

console.log(grupoFinal)