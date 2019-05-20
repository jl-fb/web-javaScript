const bodyParser = require("body-parser")
const cors = require("cors")

// chamando o consign para autoload e gerência das bibliotecas, routas, controladores etc chamadas
// relacionamos ele com o "app" do "index.js
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}