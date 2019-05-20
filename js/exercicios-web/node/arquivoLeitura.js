const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrona
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// assincrona (melhor)
fs.readFile(caminho, 'utf-8', (error, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// para arquivos JSON apenas chamamos dessa maneira:

const config = require('./arquivo.json')
console.log(config.db)

// leitura de pasta

fs.readdir(__dirname, (err, arquivos)=> {
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})
