// express imported here
const express = require('express');
// path imported here
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Bly')
    res.sendFile('../client')
    // const pathFile = path.join(__dirname, '../client')
    // const pathFile = path.join(__dirname, '../public')
    // res.sendFile(pathFile)
})

module.exports = router;
