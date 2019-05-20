console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c=3

exports = null // não seta como nulo as variáveis, "this" e "exports" apenas aponta para memória de module.exports

console.log(module.exports) //retorna a, b, c 

exports = {
    nome: 'Teste'
}
console.log(module.exports)

// para mudar os valores usar o module.exports

module.exports = {publico: true}