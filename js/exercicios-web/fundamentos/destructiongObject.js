//ES2015
//destructing seria a técnica de retirar mais de uma variáel de uma estrutura (array, objeto)

const pessoa = {
  nome:"Camila",
  idade: 27,
  endereco: {
    rua:"jajaj",
    numero:888
  }
}
console.log(pessoa);

const {nome, idade}=pessoa; //retirando as variaveis do objeto pesso pelo destructing
console.log(nome, idade);

const{nome: n, idade: i} = pessoa; //alterando nome das variáveis
console.log(n,i);

//acessar objeto dentro de objeto
const {endereco:{rua,numero}} = pessoa
console.log(rua,numero);

const {endereco} = pessoa
console.log(endereco);

//métodos normais
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco);
