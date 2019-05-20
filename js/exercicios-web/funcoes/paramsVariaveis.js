function soma(){
  let soma=0;
  for(let i in arguments){//arguments é um array (função interna do JS)
    soma+=arguments[i];
  }
  return soma;
}
console.log(soma());
console.log(soma(1,8.8,9,10));
