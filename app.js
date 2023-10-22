// express imported
const express = require('express');
// ROUTER files by imported
const ROUTER = require('./Routes')
// path imported 
const path = require('path');
// app imported 
const app = express();

// following file is accessible for front end files
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'client')))

app.use('/', ROUTER)

app.listen(3000, () => {
    console.log('Listening at 3000')
})
