const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const details = require('./data/details.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API Running!');
})
// courses part
app.get('/catagories', (req, res) => {
    res.send(categories);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = details.find(n => n.course_id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Category avilable!', port);
})