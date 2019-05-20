const pilotos = ['Vettel', "Alonso", "Raikkonen","Massa"]
console.log(pilotos);
pilotos.pop()//massa quebrou o carro
console.log(pilotos)

pilotos.push("Verstappen")

pilotos.shift() //remove o primeiro piloto
console.log(pilotos)

pilotos.unshift("Hamilton")
console.log(pilotos)

// splice pode adicionar e remover elementos

/// add
pilotos.splice(2,0,"Bottas", "Massa")
console.log(pilotos);

// remover
pilotos.splice(3,1) //massa quebrou!!!
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // novo array gerado pelo "slice"
console.log(algunsPilotos); //1º índice entre no array

const algunsPilotos2 = pilotos.slice(1,4)//último índice não entra no array
console.log(algunsPilotos2);
