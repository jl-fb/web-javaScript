const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/* Definir funções midware */
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true})) /* Parser de Formulario */
app.use(bodyParser.json()) /* Parser de json */


/* Interpretar arquivo de upload */
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um erro.')
        }
        res.end("Concluído com sucesso.")
    })
})
app.post('/formulario', (req, res) => {
    /*receber dados do browser no back precisa ter o bodyparser ativado*/
    res.send({
        ...req.body,
        id:1
    })
})

app.get("/parOuImpar", (req,res) =>{
    //dentro do express existem 3 formas de se receber dados do front para o server
    //uma -> req.body
    //outra -> req.query
    // req.params
    /* números recebidos sempre têm que ser parseados para int ou float */
    const par = parseInt(req.query.numero) %2 === 0
    //const impar =parseInt(req.query.numero) %2 === 1
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))