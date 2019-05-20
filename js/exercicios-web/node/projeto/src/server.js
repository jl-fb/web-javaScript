const porta =  3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//todas as requisições passarão por essa função
//por causa do .USE, ela transformará todos os JSON (TXT) da página em objetos
app.use(bodyParser.urlencoded({extended: true})) 

// retorna a lista de produtos
app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})

//retorna o produto chamado pela requisição ":id" da url
app.get('/produtos/:id',(req, res, next) => res.send(bancoDeDados.getProduto(req.params.id))) 


// salvando os produtos
app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON para ir pra o browser
})

// alterando produtos (PUT)
app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON para ir pra o browser
})

// deletando produtos (delete + função do DB)
app.delete('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON para ir pra o browser
})


// app.get('/produtos', (req, res, next)=>{
//     res.send({nome: 'Notebook', preco: 123.45}) //converte para JSON auto
// })

app.listen(porta, ()=> console.log(`Servidor está executando na porta ${porta}.`))
