module.exports = (app, text) => {
    function salvar(req, resp) {
        resp.send(`Protudo > salvar > ${text}`)
    }
    function obter(req, resp) {
        resp.send(`Produto > Obter > ${text}`)
    }
    app.post('/produto', salvar)
    app.get('/produto', obter)

    //opcional
    return { salvar, obter }
}