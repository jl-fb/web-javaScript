//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1(){}
function ler(){console.log("Hello")};
//Armazenar em variável
const fun2 = function(){}

//Armazenar em array
const array = [function(a,b) {return a+b}, fun1,fun2];
console.log(array[0](2,3));

//Armazenar em atributo de objeto
const obj = {}
obj.falar = function(){return "Olá"}
console.log(obj.falar());
//ou
const obj2 = {
  falar: function(){
    return "óia";
  }
}
console.log(obj2.falar());

//Passar função como parametro
function run(fun){
  fun();
}
run(function(){console.log("Executando...")})

//retornar/conter como parametro
function soma(a,b){
    return function(c){
      console.log(a+b+c);
    }
}
soma(8,9)(7);
