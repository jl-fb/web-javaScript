let valor //não inicializada
console.log(valor); //undefined - não inicializada
//console.log(valor2); //aqui ocorre erro "is not defined" (não declarado)

valor=null; //ausência de valor
console.log(valor);
// console.log(valor.toString()); // erro!!!!

const prod = {};//prod decalrada
console.log(prod);//indica objeto sem atibutos
console.log(prod.preco); //atributo preço não declarado (undefined)
