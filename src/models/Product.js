'use strict';

const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: Stroign, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
    imageUrl: {type: String, required: true} 
})

