const prod1 ={}; //objeto é dinâmino, criado com chaves
prod1.nome = "celular ultra" //criado atributo nome, dinamicamente
prod1.preco = 4999;
console.log(prod1);

const prod2 = {
    nome: "Camisa",
    preco: 70.00
}
console.log(prod2);


const prod3 = {
    nome: "Camisa",
    preco: 70.90,
    obj: {
      blabla: 1,
      obj: {
        blabla: 2
      }
    }
}
console.log(prod3);
