const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(cors());

const port = process.env.PORT || 3000;

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'bin')));

// ===========================
// routes
// ===========================

var signup = require('./services/signup');
var login = require('./services/login');
var characters = require('./services/characters');

app.use('/login', login);
app.use('/signup', signup);
app.use('/characters', characters);

app.get('*', (req, res) => {
    res.sendFile(path.join(___dirname, 'bin/index.html'))
});


// ===========================
// server listening
// ===========================

app.listen(port, () => {
    console.log('Server started on port 3000');
})