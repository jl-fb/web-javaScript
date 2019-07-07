const { authSecret } = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const signin = async (req, resp) => {
        if (!req.body.email || !req.body.password) {
            return resp.status(400).send("Informa usuário e senha")
        }
        //verificar se usuario fornecido existe no db
        const user = await app.db('users')
            .select('*')
            .where({ email: req.body.email })
            .whereNull('deletedAt')
            .first()

        if (!user) {
            return resp.status(400)
                .send('Usuário não encontrado!')
        }
        //comparar senha do usuário fornecida no front com a do db
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return resp.status(401).send('Email ou senha inválidos!') // já é erro de usuário e senha não coincide

        // Gerrndo token - data de criação e de validade (em segundos)
        const now = Math.floor(Date.now() / 1000)

        // Conteúdo do token
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            admin: user.admin,
            // iat (issued at )
            iat: now,
            // Data de expiração (3 dias)
            exp: now + (60 * 60 * 24)
        }
        // Gerando o token e mandando para o frontend
        resp.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })

    }
    const validateToken = async (req, resp) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return resp.send(true)
                }
            }
        } catch (error) {
            //ignorado, problema com o token
        }
        return resp.send(false)
    }
    return { signin, validateToken }
}