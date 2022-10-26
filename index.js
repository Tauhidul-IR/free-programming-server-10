const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send("API is Running")
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const course = courses.find(cr => cr.id === id);
    res.send(course)
})
app.get('/courses/premium/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const course = courses.find(cr => cr.id === id);
    res.send(course)
})



app.listen(port, () => {
    console.log("runnig on port", port)
})