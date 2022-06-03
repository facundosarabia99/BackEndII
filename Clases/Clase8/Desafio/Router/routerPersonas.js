const { Router } = require('express');

const personas = [];

const routerPersonas = new Router();

routerPersonas.get('/', (req,res) => {
    res.json(personas)
});

routerPersonas.post('/', (req ,res) => {
    personas.push(req.body)
    res.json(req.body)
});

module.exports = routerPersonas;