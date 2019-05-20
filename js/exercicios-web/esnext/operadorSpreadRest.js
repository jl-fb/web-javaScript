// operador ...rest(juntar) / spread(espalhar)
// usar rest com parametros de função

//REST (juntar)
const rest = (...parametros) => console.log(parametros)
rest(15,18,45.08,89)


// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone, funcionario)

console.log("")
// usar spread com array
const grupoA = ['João', 'Pedro','Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Nathalia']
console.log(grupoA, grupoFinal)

