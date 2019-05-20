const nums = [1,2,3,4,5];

//For com propósito
let resultado = nums.map(function(e){
    return e*2
})

console.log(resultado)

const soma10 = e => e+10
const triplo = e=>e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


const dobro = function(e){
    const rs = []
    for(let i=0; i<e.length; i++){
        rs.push(e[i] * 2)
    }
    return rs
}

console.log(dobro(nums))