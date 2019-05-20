// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //transforma os valores do objeto para Array
console.log(Object.entries(obj)) //transforma os valores do objeto para matriz

// Melhorias na Notação Literal
const nome = "Carla"
const pessoa = {
    nome, 
    ola() {
        return "Oi gente!"
    }
}

console.log(pessoa.nome)
console.log(pessoa.ola())


// Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())