'use strict';

const { getProducts, newProduct, getProductById } = require('../controllers/productController');

const productRouter = require('express').Router();

productRouter.route('/').post(newProduct).get(getProducts);


productRouter.route('/:id').get(getProductById)

module.exports = productRouter;