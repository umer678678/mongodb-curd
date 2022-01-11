const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {body, validationResult, check,param} = require('express-validator')
const {productValidationRule , validate} = require('../../validation/validator')

// load product controller
const productController = require('../../controllers/Product.Controller')

// @route   GET api/product/test
// @desc    Tests product route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'product Works' }));

// @route   POST api/product
// @desc    create product route
// @access  Public
router.post('/', validate,productController.createProduct)

 
// @route   GET api/product:email
// @desc    get product info by email route
// @access  Public
router.get('/:name',productController.getProductByName)
// @route   upadte api/product
// @desc    update product route
// @access  Public
router.patch('/update/:product_id',validate,productController.updateProduct)

// @route   GET api/product/:id
// @desc    get product info by id route
// @access  Public
router.get('/:id',[
    param('id').isMongoId().withMessage('not a valid mongoid')
], validate, productController.getProductByid)

// @route   delete api/product/:id
// @desc    get product info by id route
// @access  Public
router.delete('/:id',[
    param('id').isMongoId().withMessage('not a valid mongoid')
], validate, productController.deleteProduct)






module.exports = router;