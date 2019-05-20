function getPreco(imposto = 0, moeda = "R$"){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco
}
global.preco = 20
global.desc = 0.1
console.log(produto.getPreco());

const carro = {preco: 49990, desc:0.20}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

const moto = {
  nome: 'Honda 600',
  preco: 5000,
  desc: 0.10,
  getPreco: getPreco
}
console.log(getPreco.call(moto));
console.log(getPreco.call(moto, 0.10, "$$"));
console.log(getPreco.apply(moto, [0.2, "$"]));
