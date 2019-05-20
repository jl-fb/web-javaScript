const express = require('express')
const app = express() // instanciando express e associando a const app
const bodyParser = require('body-parser') //faz parser do corpo do request (no caso os dados do form) e joga em request.body (acesso a todos os dados submetidos)

//urlencoded é o padrão que os dados são mandados do formulario
app.use(bodyParser.urlencoded({extended:true})) 

// atendendo urls no método indicado no form usando funções midleware
//atendendo url usuario que vem do formulario (passar uma resposta)
app.post('/usuarios', (req, resp)=>{
    console.log(req.body) //sabendo o que chegou como request
    resp.send(`<h1>Parabéns. Usuário cadastrado</h1>`) //enviando resposta para cliente
})


//Método para pegar o id (params) indicado na URL
app.post('/usuarios/:id', (req, resp,)=>{
    console.log(req.params.id)
    console.log(req.body) //sabendo o que chegou como request
    resp.send(`<h1>Parabéns! Usuário id=${req.params.id} alterado!</h1>`) //enviando resposta para cliente
})
// Mandar o server ficar "ouvindo" a porta 3003
app.listen(3003)
