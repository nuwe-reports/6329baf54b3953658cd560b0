var express = require('express');
var bcrypt = require('bcrypt');
var authenticacion = require('../middlewares/authentication');
const db = require('../config/db');

var app = express();

// ===========================
// autenticacion
// ===========================

app.post('/', async(req, res) => {

    let data = [req.body.email.toLowerCase()];

    let sql = "select * from credentials WHERE user=?";

    await db.query(sql, data, (err, results) => {
        // respuesta en caso de error
        if (err) {
            return res.status(400).send({
                message: 'Error en la validación del usuario. Intentalo más tarde'
            });
        }
        // respuesta si el usuario no existe
        if (!results.length) {
            return res.status(401).send({
                message: 'El usuario no existe'
            });
        }

        // comprobar el password
        var comparePassword = bcrypt.compareSync(req.body.password, results[0].password);

        if (!comparePassword) {
            return res.status(401).send({
                message: 'La contraseña es incorrecta'
            });
        } else {
            // crear token
            let payload = {
                "user": results[0].user
            }

            var token = authenticacion.generateToken(payload);

            res.status(200).send({
                user: results[0].user,
                token: token
            });

        }

    });

});

module.exports = app;