const jwt = require('jsonwebtoken')

const SALT = "curd_token"
const genToken = (payload) => {
    return jwt.sign(payload, SALT , { expiresIn: '1h' })
}

const validateToken = (token) =>{
    return jwt.verify(token, SALT)
}

module.exports = {
    genToken,
    validateToken
}