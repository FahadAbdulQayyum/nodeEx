// express imported
const express = require('express');
// ROUTER files by imported
const ROUTER = require('./Routes')
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'client')))

app.use('/', ROUTER)

app.listen(3000, () => {
    console.log('Listening at 3000')
})
