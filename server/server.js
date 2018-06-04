
const express = require('express');
const app = express();
const router = require('./routes')
const mongoose = require('mongoose');
app.use('/user/', router);

app.listen('3000', function() {
    console.log('Server started on port : 3000');
})