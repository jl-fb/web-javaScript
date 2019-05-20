let dobro = function(a){
    return 2*a;
}
console.log(dobro(2));

//utilizar o arrow
dobro = (a) => {
    return 2*a;
}

// ou
dobro = a => 2*a; //função de uma única linha apenas
console.log(dobro(Math.PI));

let ola = function(){
  return "Olá";
}
console.log(ola());

ola = () =>"ólá";
console.log(ola());

/////// usar arrow fixa o "this" ao contexto em q é criado primeiro
function Pessoa (){
  this.idade = 0;// aqui esta a primeira declaração do this

  setInterval( () => {
      this.idade++;
      console.log(this.idade);
  },1000);
}
new Pessoa;

//// THIS com ARROW e BIND
let comparaComThis = function(param){
  console.log(this === param);
}
comparaComThis(global);
comparaComThis(module.exports);
const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
