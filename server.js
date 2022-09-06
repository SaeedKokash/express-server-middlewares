'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const validNum = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// console.log("hello from server.js")

// adding a homepage to make sure everything is running correctly
app.get('/', (req, res) => {
    res.status(200).send('Hello from HomePage')
})

// creating a /square route
app.get('/square', validNum(), (req, res) => {
    // console.log("im in /square")
    const num = req.query.num
    const data = num * num;
    res.status(200).json( {num: data} )
})

// error handler
app.use(errorHandler);

function start(port){
    app.listen(PORT, () => console.log(`Server Starting on ${PORT}`));
}

module.exports = {
    app: app,
    start: start,
}