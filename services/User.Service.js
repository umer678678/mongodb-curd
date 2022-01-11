const User = require('../models/User.Model')

const create = (user) => {
    const userModel = new User(user)
    return userModel.save()
}

const findByEmail = (email) => {
     return User.findOne({email})
}
const deleteById = (id) => {
    return User.findByIdAndDelete(id)
}
module.exports = {
    create,
    findByEmail,
    deleteById
}