const escola = [
    {nome: 'Turma M1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    },{
        nome: "Ana",
        nota:9.3
    }]
}, {nome: 'Turma M2',
    alunos: [{
        nome: "Rebeca",
        nota: 8.9
    },{
        nome: "roberto",
        nota:7.3
    }]
}
]
const getNotaAluno = a => a.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

Array.prototype.flatMap = function(callback){ // essa callback será a getNotasTurma
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)