const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
    console.log('llego una peticion')
    console.log(`metodo: ${req.method} - url: ${req.url}`)
    next()
})

app.use('/', (req, res, next) => {
    console.log('ok')
    next()
})

app.use((req, res, next) => {
    if (req.url.split().includes('@')){
        res.status(400).json({msj: 'ruta invalida'})
    } else {
        next()
    }
})

app.get('/', (req, res) => {
    res.send('ok')
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
