const moduloA = require('../../moduloA') // caminho relativo

console.log(moduloA.ola)

// caminho absoluto (melhor não utilizar)
const moduloB = require('/home/joao/Documentos/aprendizados/js/exercicios-js/node/moduloB')
console.log(moduloB.boaNoite())

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)