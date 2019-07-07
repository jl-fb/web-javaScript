const schedule = require('node-schedule');

module.exports = app => {
    // Marcando o schedule para ser chamado todo minuto
    // Indo no postgres e fazendo a contagem dos elementos
    schedule.scheduleJob('*/1 * * * *', async function () {
        const usersCount = await app.db('users').count('id').whereNull('deletedAt').first();
        const categoriesCount = await app.db('categories').count('id').first();
        const articlesCount = await app.db('articles').count('id').first();

        // Recuperando o modelo do MongoDB
        const { Stat } = app.api.stats

        // Armazenando em uma constante para ser comparado se ouve mudanças
        const lastStat = await Stat.findOne({}, {},
            { sort: { 'createdAt': -1 } })

        // Criando nova stat apara comparar com a lastStat capturada acima
        const stat = new Stat({
            users: usersCount.count, //1 ou 2 ou 3 etc
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date() // add nova data para sempre comparar e atualizar
        })

        //verificando se mudou, caso sim  persistir no mongoDB
        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles
        if (changeUsers || changeCategories || changeArticles) {
            stat.save().then(() => console.log('[Stats] Estatísticas atualizadas'))
        }
    })
}