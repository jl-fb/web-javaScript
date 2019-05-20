//estrategia 1 para gerar valor padrao

function soma1(a,b,c){
  a=a||1;
  b=b||1;
  c=c||1;
  return a+b+c;
}
console.log(soma1(), soma1(3), soma1(0,0,0));//zero retorna valor nulo e a função cospe o valor 3 como soma;


//estrategia 2,3 e 4 para gerar valor padrao
function soma2(a,b,c){
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c; //versão mais segura para numeros

  return a+b+c;
}
console.log(soma2(), soma2(3), soma2(2,1,3), soma2(0,0,0));

//usar valor padrao do es2015
function soma3(a=1,b=1,c=1){ //jeito muito melhor para valores numéricos
  return a+b+c;
}
console.log(soma3(), soma3(3), soma3(2,1,3), soma3(0,0,0));
