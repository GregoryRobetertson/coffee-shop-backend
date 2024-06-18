'use strict';

const express = require('express');
const baseRouter = require('./src/routes/baseRoutes');
const mongooseConnect = require('./database');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());
app.use(baseRouter);
mongooseConnect()
app.use(error)
app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
})