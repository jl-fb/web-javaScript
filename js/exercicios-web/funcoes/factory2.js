//Factory
function criarProduto(nome, preco){
  return {
    nome: nome,
    preco, //como possui o mesmo nome do atrbuto, pode ser declaredo apenas uma vez
    desconto: 0.1
  }
}
console.log(criarProduto("banana", 5));


//comparar Classe e Funcao Factory
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

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criarPessoa("joao");
p2.falar();
