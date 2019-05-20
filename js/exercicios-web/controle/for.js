let contador = 1;
while (contador<=10) {
  console.log(`contador = ${contador}`);
  contador++;
}
for (let i = 0; i <=10; i++) {
  console.log(i);;
}

const notas = [6,8,9,2.8];

for (let i = 0; i < notas.length; i++) {
  console.log(`nota = ${notas[i]}`);
}

////////  for in //////

const nota  = [6,6.3,8,9,10];
for (let i in notas) {
  console.log(`índice ${i}`);
}

const pessoa ={
  nome:'Ana',
  sobrenome:'Silva',
  idade:29,
  peso:64
}
for(let atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
