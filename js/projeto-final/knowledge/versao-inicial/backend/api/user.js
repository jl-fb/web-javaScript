const bcrypt = require('bcrypt-nodejs');

module.exports = app => {

    //operador destruction para não ter que ficar repetindo
    //app.api.validator.blablabla
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator;

    //função para encriptar a senha
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, resp) => {
        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id

        //Verificação se usuário é admin, somente admin pode cadastrar outro user admin
        //verificação da url - user aqui é da função
        if (!req.originalUrl.startsWith('/users')) user.admin = false

        // verificar se o user que feito junto com a requisição está setado e é admin
        if (!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, "Nome não informado")
            existsOrError(user.email, "E-mail não informado")
            existsOrError(user.password, "Senha não informada")
            existsOrError(user.confirmPassword, "Confirmação de senha não informada")
            equalsOrError(user.password, user.confirmPassword, "Senhas não conferem")

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, "Usuário já cadastrado")
            }
        } catch (error) {
            return resp.status(400).send(error)
        }

        user.password = encryptPassword(req.body.password)
        delete user.confirmPassword
        if (user.id) {
            app.db('users')
                .update(user).where({ id: user.id })
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        }

    }
    const get = (req, resp) => {
        const user = { ...req.params }

        if (!user.id) {
            app.db('users')
                .select('id', 'name', 'email', 'admin')
                .whereNull('deletedAt')
                .then(users => resp.json(users))
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('users')
                .select('id', 'name', 'email', 'admin')
                .where({ id: user.id }).first()
                .whereNull('deletedAt')
                .then(users => resp.json(users))
                .catch(err => resp.status(500).send(err))
        }
    }
    //add soft remove (excluir do sistema e não do db)
    const remove = async (req, resp) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistsOrError(articles, "Usuário possui artigos cadastrados")

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, "Usuário não encontrado!")

            resp.status(204).send()
        } catch (error) {
            resp.status(400).send(error)
        }
    }

    return { save, get, remove }
}