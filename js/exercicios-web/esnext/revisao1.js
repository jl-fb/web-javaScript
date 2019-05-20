//let e const

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) // não retorna, let tem escopo de bloco


//Template String
const produto = 'iPad'
console.log(`${produto} é 
caro!`) //é possível quebrar linhas sem o \n

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {idade:i, nome} = {nome: "Ana", idade: 9}
console.log(i, nome)

