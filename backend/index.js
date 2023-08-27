const connectToMongo = require('./db');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
connectToMongo();


const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// login route
app.use('/api/auth', require('./routes/auth'));

// create note route
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});