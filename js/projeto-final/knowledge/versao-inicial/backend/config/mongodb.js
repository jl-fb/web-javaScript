// Criando conexão com o mongo (arquivo será chamado no index)
const mongoose = require('mongoose');
const { mongoDB } = require('../.env')

mongoose.connect(mongoDB, { useNewUrlParser: true })
    .catch(error => {
        const msg = "ERRO! Não foi possível conectar com o MongoDB!"
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
    })