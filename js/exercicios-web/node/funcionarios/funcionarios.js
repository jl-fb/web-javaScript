const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//procurar mulher chinesa com menor salario
const mulher = mulher => mulher.genero === "F"
const chineses = p => p.pais === "China"
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

const a = axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    
    console.log("")

    const func = funcionarios.filter(chineses)
    .filter(mulher).reduce(menorSalario)
    console.log(func)

})


