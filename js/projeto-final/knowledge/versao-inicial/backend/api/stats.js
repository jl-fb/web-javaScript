// Criando "Schema para o mongo e o método que retornará as estatísticas do db"
module.exports = app => {
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })
    const get = (req, resp) => {
        // indo no mongoDB e pagando a última estatística cadastrada
        // trazendo todo o "Schema" de um único registro
        const defaultStat = {
            users: Number,
            categories: Number,
            articles: Number
        }
        Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then((result) => {
                resp.json(result) || defaultStat
            })
    }
    return { Stat, get }
}