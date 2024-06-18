'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const baseRouter = require('./src/routes/baseRoutes');
const error = require('./src/middleware/error');
const mongooseConnect = require('./database');
const productRouter = require('./src/routes/productRoutes');
const notFound = require('./src/middleware/notFound404');
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use(baseRouter);
app.use('/product', productRouter);

// 404 Handler
app.use(notFound);

// Error Handling
app.use(error);

mongooseConnect().catch((err) => console.error(err))
app.use(error)
app.listen(PORT, () => {
console.log('Running on port ' + PORT);
})