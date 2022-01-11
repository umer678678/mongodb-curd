const productServices = require('../services/Product.service')

const createProduct = (req, res) => {
    productServices.create(req.body)
    .then((product) => {
        res.status(201).json(product)
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const getProductByName = (req, res) => {
    const product_name = req.params.name
    productServices.findByName(product_name)
    .then((product) => {
        res.status(201).json(product)
    }).catch((err) => {
        res.status(400).json(err)
    })
}
const getProductByid = (req, res) => {
    const product_id = req.params.id
    productServices.findByName(product_id)
    .then((product) => {
        res.status(201).json(product)
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const updateProduct = (req, res) => {
    const productFields = {};
    if (req.body.name) studentFields.name = req.body.name;
    if (req.body.price) studentFields.email = req.body.price;
    
    studentServices.update(req.params.prodcut_id,productFields).then(product => res.json(product));
}

const deleteProduct = (req, res) => {
    productServices.deleteById(req.params.id)
    .then(()=>{
        res.status(200).json({
            msg:'product deleted successfully'
        })
    }).catch((err) => {
        console.log('Some error occured while deleteing product')
        res.status(400).send(err)
    })
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getProductByid
}



