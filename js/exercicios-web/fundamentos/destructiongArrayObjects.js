const [a]= [10]//utilizando o destructin "[]=>[a]"
console.log(a);

function rand([min=0,max=1000]){
  if (min>max) {
    [min,max] = [max,min];
    //1º notação destructing, 2º notação array
      const valor = Math.random()*(max-min)+min;
      return Math.floor(valor);
  }
}
console.log(rand([8,80]));
console.log(rand([, 5]));
console.log(rand([99,]));
console.log(rand([]));


//////////OBJECT/////
function rand({min=0,max=1000}){ //usando operador destrocting
  const valor = Math.random()*(max-min)+min;
  return Math.floor(valor);
}
console.log(rand({max:80,min:40}));//usando notação literal de objeto
// outra forma
const obj = {max:58, min:9};
console.log(rand(obj));
//passando apenas um valor (padrões definidos na função)
console.log(rand({max:10}));
console.log(rand({}));
