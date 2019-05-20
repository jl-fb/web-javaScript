const express = require('express');
/* instanciando o express
 para criar rotas, responder requisições HTTP etc*/
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid');

const usuarioApi = require('./api/usuario')

require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

/* Protocolo HTTP é baseado em requisição e resposta 
O Express é uma estrutura web de roteamento e middlewares que tem uma 
funcionalidade mínima por si só: Um aplicativo do Express é essencialmente 
uma série de chamadas de funções de middleware.

Funções de Middleware são funções que tem acesso ao objeto de solicitação (req), 
objeto de resposta (res), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. 
A próxima função middleware é comumente denotada por uma variável chamada next.
Funções de middleware podem executar as seguintes tarefas:

    Executar qualquer código.
    Fazer mudanças nos objetos de solicitação e resposta.
    Encerrar o ciclo de solicitação-resposta.
    Chamar a próxima função de middleware na pilha.
*/

/* app.use((req, res) => {
    // aqui a função middleware será executada sempre que o applcativo 
    // receber solicitação (refresh q seja ou qualquer URL por não ter vínculo
    // com URL) 
    res.send("Estou <b>bem</b>!...")
})
 */

/* app.get('/testes', (req, resp) => {
    //resp.send()
    resp.json({
        name: 'iPad 32Gb',
        price: 1899.00,
        discount: 0.12
    })
}) */

/* app.get('/testes', (req, resp) => {
    //resp.send()
    resp.json([
        { id: 7, name: "Ana", position: 1 },
        { id: 34, name: "Bia", position: 2 },
        { id: 73, name: "Carlos", position: 3 }
    ])
})
 */
app.use(saudacao("João"))

app.get('/clientes/relatorio', (req, resp, next) => {
    resp.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, resp) => {
    resp.send(`Cliente ${req.params.id} selecionado`)
})

app.use(bodyParser.text())
app.use(bodyParser.json())

app.post('/corpo', (req, resp) => {
    // let corpo = ""
    // req.on('data', function (parte) {
    //     corpo += parte
    // })
    // req.on('end', function () {
    //     resp.send(corpo)
    // })
    resp.send(req.body)
})

app.use('/testes', (req, res, next) => {
    // aqui a função middleware será executada sempre que o applcativo
    // receber solicitação (refresh q seja ou qualquer URL por não ter vínculo
    // com URL)
    console.log("Antes...")
    next()
})

app.get('/testes', (req, resp, next) => {
    //resp.send()
    console.log("Durante...");

    resp.json({
        data: [
            { id: 7, name: "Ana", position: 1 },
            { id: 34, name: "Bia", position: 2 },
            { id: 73, name: "Carlos", position: 3 }
        ],
        count: 30,
        skip: 0,
        limtit: 3,
        status: 200
    })
    next()
})

app.use((req, res) => {
    // aqui a função middleware será executada sempre que o applcativo
    // receber solicitação (refresh q seja ou qualquer URL por não ter vínculo
    // com URL)
    console.log("Depois..")
})


app.listen(3000, () => {
    return console.log("Backend executando...");
});