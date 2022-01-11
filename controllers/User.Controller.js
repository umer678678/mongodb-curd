const userServices = require('../services/User.Service')
const token_manager = require('../config/token-manager')

const createUser =(req, res) => {
   const user =  userServices.create(req.body)
   const token = token_manager.genToken(user.toObject()) 
    .then((user) => {
        res.status(201).json({
            success: true,
            token : 'Bearer ' + token,
            user    
        })
    })
}


module.exports = {
    createUser
}
