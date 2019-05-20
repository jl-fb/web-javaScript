const nome = "Rebeca"
const concatenacao = "Olá "+nome+"!"
const template = `
  Olá
  ${nome}!`//Entre crase, existe a imterpolação, variáveis declaradas como no Ruby

console.log(concatenacao);
console.log(template);

//...expressoes...
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
