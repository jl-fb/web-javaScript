const queries = require('./query')

module.exports = app => {
    const { existsOrError } = app.api.validator

    const save = (req, resp) => {
        const article = { ...req.body }
        if (req.params.id) article.id = req.params.id

        try {
            existsOrError(article.name, "Nome não informado")
            existsOrError(article.description, "Descrição não informada")
            existsOrError(article.categorieId, "Categoria não informada")
            existsOrError(article.userId, "Autor não informado")
            existsOrError(article.content, "Conteúdo não informado")
        } catch (error) {
            resp.status(400).send(error)
        }
        //Persistindo
        if (article.id) {
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => resp.status(204).send())
                .catch(error => resp.status(500).send(error))
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => resp.status(204).send())
                .catch(error => resp.status(500).send(error))
        }
    }
    const remove = async (req, resp) => {
        try {
            const validId = id => {
                id == RegExp(/[1-9]/)
                if (Math.sign(id) == 1) {
                    return id
                } else {
                    const msg = "Id não é um número válido"
                    return msg
                }
            }

            const rowDeleted = await app.db('articles')
                .where({ id: validId(req.params.id) }).del()

            try {
                existsOrError(rowDeleted, "Artigo não encontrado")
            } catch (error) {
                return resp.status(400).send(error)
            }

            resp.status(204).send()
        } catch (error) {
            resp.status(500).send(error)
        }
    }
    const limit = 10 //usado para paginação
    const get = async (req, resp) => {
        const page = req.query.page || 1

        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)

        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(articles => resp.json({ data: articles, count, limit }))
            .catch(error => resp.status(500).send(error))
    }
    const getById = (req, resp) => {
        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString()
                return resp.json(article)
            })
            .catch(error => resp.status(500).send(error))
    }
    const getByCategory = async (req, resp) => {
        const categoryId = req.params.id
        const page = req.query.page || 1
        //obetendo objeto de ids de categorias (pai e filhas)
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId)

        //mapeando o objeto para ter o array de ids
        const ids = categories.rows.map(c => c.id)


        //knex interagindo com 2 tabelas do postgresql
        app.db({ a: 'articles', u: 'users' })
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .limit(limit).offset(page * limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.userId']) //igualar tabelas a.userid = u.id para não gerar erro
            .whereIn('categorieId', ids) //consultar um conjunto de ID - ou seja, pegar todos os articles (id filhos) q são de uma categoria (Id pai)
            .orderBy('a.id', 'desc')
            .then(articles => resp.json(articles))
            .catch(error => resp.status(500).send(error))
    }

    return { save, remove, get, getById, getByCategory }
}