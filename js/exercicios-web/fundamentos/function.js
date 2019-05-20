//Função sem retorno
function imprimirSoma(a, b){
  console.log(a+b);
}

imprimirSoma(2,3);
imprimirSoma(2) //retorna NaN


//Função com retorno
function soma(a,b = 1)//indica q valor padrão de b é 1
{
  return a+b;
}
console.log(soma(2,9));// 11
console.log(soma(8));//9

//Armazenando uma funcao em uma variável
const imprimirSoma2 = function(a,b){
  console.log(a+b);
}
imprimirSoma2(2,3);

//Armazenando funcao arrow em variável
const soma2 = (a,b) => {
  return a+b;
}
console.log(soma2(2,7));

//return implícito, quando só há uma linha na funcao
const subtracao = (a,b) => a-b;
console.log(subtracao(2,9));

const cidir = (a,b) => a*b;
console.log(cidir(255,2));
