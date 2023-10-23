const express = require('express');
const ROUTER = require('./Routes')
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'client')))

// The routes starts from here in ROUTER files
app.use('/', ROUTER)

app.listen(3000, () => {
    console.log('Listening at 3000')
})