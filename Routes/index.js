// express imported heree
const express = require('express');
// path imported here
const path = require('path');
// router imported here
const router = express.Router();

// router controller of get method starts here 
router.get('/', (req, res) => {
    // send the 'BLY' when hits at '/' route in get method
    res.send('Bly')
    // send the client file at '/' route in get method
    // res.sendFile('../client')
    // res.sendFile('../public')
    // const pathFile = path.join(__dirname, '../client')
    // const pathFile = path.join(__dirname, '../public')
    // res.sendFile(pathFile)
})

// This route is accessible but '/' is not, I wonder why? Yeah
router.get('/fahad', (req, res) => {
    // res sended the following text
    res.send("Welcome to Fahad's route")
})

// router imported here
module.exports = router;
