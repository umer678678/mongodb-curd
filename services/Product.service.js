const Product = require('../models/Product.Model')

const create = (objProduct) => {
    const productModel= new Product(objProduct)
    return productModel.save()
}

const findById = (id) => {
    return Product.findById(id)
}

const findByName  = ( name )=> {
    return Product.findOne({name})
}

const deleteById = (id) => {
    return Product.findByIdAndDelete(id)
}

const update = (id, productFields) => {
    const updatedFields = Product.findOneAndUpdate(
        {$set: productFields},
        {new: true}
    )
    return updatedFields
}

module.exports = {
    create,
    update,
    deleteById,
    findByName,
    findById
}