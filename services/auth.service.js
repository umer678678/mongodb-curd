const { findByEmail } = require('./User.Service')
const token_manager = require('../config/token-manager')
const bcrypt = require('bcryptjs')

const login = (email, password) => {
    const user = findByEmail(email)
    const isMatch = bcrypt.compare(password, user.password)
    if(!isMatch) {
        throw new Error("unable to login")
    }
    const token = token_manager.genToken(user)
    return {user , token}
}

module.exports = {
    login
}