const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('AsSalam')
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})