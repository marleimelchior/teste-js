const nome = "rebeca";
const concatenacao = "ola" + nome + "!";

const template = `
olá

${nome}!`
console.log(concatenacao, template);

//expressoes ...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`ei... ${up("cuidado")}`);