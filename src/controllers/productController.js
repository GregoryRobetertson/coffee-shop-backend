'use strict';

const Product = require("../models/Product");

async function newProduct(req, res, next) {
    try {
       const { name, description, price, category, stock, imageUrl } = req.body;
       const product = new Product({ name, description, price, category, stock, imageUrl }); // Capitalize Product
       await product.save();
       res.status(201).json(product); // Corrected res instead of req
    } catch (error) {
        next(error);
    } 
}

async function getProducts(req, res, next) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

module.exports = { newProduct, getProducts };
