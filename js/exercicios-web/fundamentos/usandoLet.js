var numero = 1;
{
  let numero = 2;
  console.log('dentro=',numero); //Let declara apenas no bloco neste caso
}
console.log('fora=',numero);


//Let tem escopo global, funcao e bloco, JS procura dentro do menor escopo
//e imprime o valor (procura dentro do bloco, depois funcao, depois global)
let texto = 'r';
{
  let texto = 'd';
  console.log('dentro=',texto);
}
console.log('fora=',texto);
