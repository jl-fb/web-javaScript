const produtos = [
    {nome: "Notebook", preco:2499, fragil: true},
    {nome: "iPad pro", preco:4199, fragil: true},
    { nome: "Copo de vidro", preco:12.49, fragil: true},
    {nome: "Copo de Plático", preco:18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return true //todos os elementos serão retornados. aqui voce coloca a condição filtrada
}))
console.log("")

const caro = p =>p.preco>2000;
//const fragil = (f)=>f.fragil == true;
const fragil = f=>f.fragil;

const result = produtos.filter(caro).filter(fragil)
console.log(result)