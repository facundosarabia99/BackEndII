const { Router } = require('express');

const mascotas = [];

const routerMascotas = new Router();

routerMascotas.get('/', (req,res) => {
    res.json(mascotas)
});

routerMascotas.post('/', (req ,res) => {
    mascotas.push(req.body)
    res.json(req.body)
});

module.exports = routerMascotas;