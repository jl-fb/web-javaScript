console.log('a=',a);//mesmo a variável não estando declarada, no efeito hoist não daria um erro, mas sim "undefined"
//declarando com o var após a chamada dela, ela irá ser armazenada e mostrada
var a = 2;
console.log('a=',a);
 //com o Let esse efeito nao acontece
