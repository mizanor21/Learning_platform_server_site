const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('API Running!');
})

app.get('/catagories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Category avilable!', port);
})