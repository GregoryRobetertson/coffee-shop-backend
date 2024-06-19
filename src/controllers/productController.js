'use strict';

const Product = require("../models/Product");

async function newProduct(req, res, next) {
    try {
       const { name, description, price, category, stock, imageUrl } = req.body;
       const product = new Product({ name, description, price, category, stock, imageUrl });
       await product.save();
       res.status(201).json(product);
    } catch (error) {
        next(error);
    } 
}

// Get all products
async function getProducts(req, res, next) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

// Get single product
async function getProductById(req, res, next) {
    try {
         {
           const product = await Product.findById(req.params.id);
           if(!product) {
            returnres.status(400).json({error: 'Not Found!'})
           }
           res.status(200).json(product);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { newProduct, getProducts, getProductById};
