var express = require('express');
var bcrypt = require('bcrypt');
const db = require('../config/db');

var app = express();


// ==================================
// Sign up
// ==================================

app.post('/', async(req, res) => {

    const salt = bcrypt.genSaltSync();
    let sql = "insert into credentials set ?";

    let data = {
        user: req.body.user.toLowerCase(),
        password: bcrypt.hashSync(req.body.password, salt)
    }

    db.query(sql, data, (err, results) => {
        if (err && err.errno === 1062) {
            return res.status(400).json({
                message: 'El correo electrónico ya existe',
                errors: err
            });
        } else if (err) {
            return res.status(500).json({
                message: 'No se ha podido crear el usuario',
                errors: err
            });
        }

        return res.status(200).json({
            message: 'Te has registrado correctamente',
        });
    });


});

module.exports = app;