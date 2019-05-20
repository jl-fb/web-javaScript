//const express = require('express')
//const app = express();
const app = require('express')();
const consign = require('consign');
const db = require('./config/db');
const mongoose = require('mongoose');
const numeral = require('numeral');
//adicionando knex (gerenciodor de DB) ao "app" para 
//poder ter como fazer DML, DDL, DCL etc...
app.db = db;
app.mongoose = mongoose;



//chamando e configurando consign
consign()
    .include('./config/passport.js')
    .then('/config/mongodb.js')
    .then('./config/middlewares.js')
    .then('./api/validator.js')
    .then('./api')
    .then('./schedule/statsSchedule.js')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log("Backend executando...");

})