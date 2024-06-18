'use strict';

const { getProducts, newProduct } = require('../controllers/productController');

const productRouter = require('express').Router();

productRouter.route('/').post(newProduct).get(getProducts);

module.exports = productRouter;