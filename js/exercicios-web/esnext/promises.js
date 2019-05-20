function falarDepoisDe(segundos, frase) { //função que retorna uma promessa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
//acessar um retorno Promise é através do "then"
falarDepoisDe(3, 'ola').then(frase => console.log(frase.concat('!')))

falarDepoisDe(3, 'ola').then(frase => frase.concat('!'))
                        .then(outraFrase=> console.log(outraFrase))
                        .catch(e => console.log(e))
