const axios = require('axios');
var express = require('express');
var authenticacion = require('../middlewares/authentication');
require('dotenv').config();

var app = express();

// =====================================
// conseguir lista de personajes
// =====================================

app.get('/', authenticacion.isLoggedIn, (req, res) => {
    const url = process.env.BASE_URL + process.env.BASE_URL_PARAMS + req.query.page;
    axios.get(url).then((resp) => {
            return res.status(200).send({
                results: resp.data
            })

        })
        .catch((err) => {
            return res.status(404).send({
                msg: 'No se han encuentrado resultados',
                errors: err
            })
        });

});

// =====================================
// conseguir un personaje
// =====================================

app.get('/:id', authenticacion.isLoggedIn, (req, res) => {

    const url = process.env.BASE_URL + '/' + req.params.id;

    axios.get(url).then((resp) => {
            return res.status(200).send({
                results: resp.data
            })

        })
        .catch((err) => {
            return res.status(404).send({
                msg: 'No se han encuentrado resultados',
                errors: err
            })
        });

});


module.exports = app;