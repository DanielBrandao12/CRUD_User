
const jwt = require('jsonwebtoken')


function verifyToken(req, res, next){
        const token = req.headers.authorization?.split(' ')[1];

        try{
            jwt.verify(token, "MinhaChaveSecreta")
        }catch(error) {

            return res.status(401).json({error: "Usuário não está autenticado"})
        }

        next()

}

module.exports = {
    verifyToken
}