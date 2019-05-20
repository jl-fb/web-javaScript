const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let rs = ''
            res.on('data', dados => {
                rs+=dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(rs))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

// Recusro recente (ES8)
// Objetivo: simplificar o uso de Promise, deixando com aparencia mais sincrona
 
//para usar o Await necessário criar uma funçao com a palava async
const obterAlunos = async() => {
    const turmaA = await getTurma('A') // com o comando await esperamos o resultado da Promise e atribuimos a uma variavel
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA,turmaB,turmaC)
}
// retorna um objeto AsyncFunction
console.log(obterAlunos)

// para chamar algo da AsyncFunction
obterAlunos().then(alunos => alunos.map(alunos => alunos.nome))
                .then(nomes => console.log(nomes))
                .catch(error => console.log(error.message))