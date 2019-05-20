class Lancamento{
    constructor(nome = "Genérico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes=mes
        this.ano=ano
        this.lancmentos = []
    }
    addLancamentos(...lancmentos){
        lancmentos.forEach(l=>this.lancmentos.push(l))
    }
    sumario(){
        let valorConsoludado = 0
        this.lancmentos.forEach(l=>{
            valorConsoludado+=l.valor
        })
        return valorConsoludado
    }
}

const salario = new Lancamento("salário", 45000)
const contaDeLuz = new Lancamento("luz", -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas)
console.log(contas.sumario())


