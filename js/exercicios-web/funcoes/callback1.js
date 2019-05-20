const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
  console.log(`${indice +1}: ${nome}`);
}
fabricantes.forEach(imprimir);

fabricantes.forEach((nome, indice) => console.log(`${indice +1}: ${nome}`));

fabricantes.forEach(a => console.log(a));
fabricantes.forEach(function(b){
  console.log(b);
});
