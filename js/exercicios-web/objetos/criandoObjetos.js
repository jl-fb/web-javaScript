// usando a notação literal

const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 = new Object();
console.log(obj2);

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome=nome
    this.getPrecoComDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15);
const p2 = new Produto('notebook', 2998.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}
const f1 = criarFuncionario('joão', 7980, 4);
const f2 = criarFuncionario('maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// 