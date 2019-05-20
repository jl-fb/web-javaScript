module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validator

    const save = (req, resp) => {
        const category = {
            name: req.body.name,
            parentId: req.body.parentId
        }
        if (req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, "Nome não informado")
        } catch (msg) {
            return resp.status(400).send(msg)
        }

        if (category.id) {
            app.db('categories')
                .update(category)
                .where({ id: category.id })
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('categories')
                .insert(category)
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        }
    }
    const remove = async (req, resp) => {
        //verificando se categoria possui FK em outras tabelas
        try {
            existsOrError(req.params.id, "Código da Categoria não informado.")

            const subcategory = await app.db('categories')
                .where({ parentId: req.params.id })
            notExistsOrError(subcategory, "Categoria possui subcatecorias.")

            const articles = await app.db('articles')
                .where({ categorieId: req.params.id })
            notExistsOrError(articles, "Categoria possui artigos.")

            const rowDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            existsOrError(rowDeleted, "Categoria não foi encontrada!")

            resp.status(204).send()
        } catch (msg) {
            resp.status(400).send(msg)
        }
    }

    //Definindo novo objeto "category" com caminho de relação entre as categorias.
    const withPath = categories => {
        const getParent = (categories, parentId) => {
            const parent = categories.filter(parent => parent.id === parentId)
            return parent.length ? parent[0] : null
        }
        const categoriesWithPath = categories.map(category => {
            let path = category.name
            let parent = getParent(categories, category.parentId)
            while (parent) {
                path = `${parent.name} > ${path}`
                parent = getParent(categories, parent.parentId)
            }
            return { ...category, path }

        })
        categoriesWithPath.sort((a, b) => {
            if (a.path < b.path) return -1
            if (a.path > b.path) return 1
            return 0
        })
        return categoriesWithPath
    }
    /*  function withPath(categories) {
         function getParent(categories, parentId) {
             const parent = categories.filter(parent => parent.id === parentId)
             return parent.length ? parent[0] : null
         }
         function categoriesWithPath() {
             categories.map(category => {
                 let path = category.name
                 let parent = getParent(categories, category.parentId)
                 while (parent) {
                     path = `${parent.name} > ${path}`
                     parent = getParent(categories, parent.parentId)
                 }
                 return { ...category, path }
 
             }
 
             )
         }
         categoriesWithPath().sort((a, b) => {
             if (a.path < b.path) return -1
             if (a.path > b.path) return 1
             return 0
         })
         return categoriesWithPath()
     } */

    const get = (req, resp) => {
        app.db('categories')
            .then(categories => resp.json(withPath(categories)))
            .catch(err => resp.status(500).send(err))
    }
    const getById = (req, resp) => {
        app.db('categories')
            .where({ id: req.params.id })
            .then(category => resp.json(category))
            .catch(err => resp.status(500).send(err))
    }

    //receber um array "categorias" e transformar em estrutura de árvore, começando da sem parentId
    const toTree = (categories, tree) => {
        if (!tree) {
            tree = categories.filter(c => !c.parentId)
        }
        tree = tree.map(parentNode => {
            const isChild = node => node.parentId == parentNode.id
            parentNode.children = toTree(categories, categories.filter(isChild))
            return parentNode
        })
        return tree
    }
    const getTree = (req, resp) => {
        app.db('categories')
            .then(categories => resp.json(toTree(categories)))
            .catch(err => resp.status(500).send(err))
    }

    return { save, remove, get, getById, getTree }

}



