/*Não funcionará  
function saudacao(nome) {
    console.log(`Seja bem vindo ${nome}... `);

} */
function saudacao(nome) {
    return function (req, res, next) {
        console.log(`Seja bem vindo ${nome}!`);
        next();
    }
}

module.exports = saudacao;