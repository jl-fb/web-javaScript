// tornar essa classe uma função construtora

class Pessoa{
  constructor(nome){
    this.nome = nome
  }
  falar(){
    console.log(`Meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa('joao');
p1.falar();


///
function Pessoa2(nome){
  this.nome = nome

  this.falar = () => console.log(`Meu nome é ${this.nome}`);
}

const p2 = new Pessoa2('joao');
p2.falar();
