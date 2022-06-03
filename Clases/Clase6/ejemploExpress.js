const express = require('expresss')

const app = express()

app.get('/', (req,res) => {
    res.send('ok')
})

app.get('/saludos', (req,res) => {
    res.send('Saludos')
})

app.get('/saludos/llegada', (req,res) => {
    res.send('hola mundo')
})

app.get('/saludos/salida', (req,res) => {
    //console.log(req.url)
    res.send('chau mundo')
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log (`Error en el servidor ${error}`))