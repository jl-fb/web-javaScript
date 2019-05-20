const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const rs = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual) //está somando, passando o valor anterior para ser somado com o próximo, o resultado será soma etc...
    return acumulador+atual
})
console.log(rs)