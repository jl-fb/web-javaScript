const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // atencao aos parenteses, pois é uma funcao sendo chamada no retornos do arquivo
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // aqui há um incremento no contador b pelo fato de o node fazer cache de um export

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // aqui não há increento por ser tratar de uma funcao factory