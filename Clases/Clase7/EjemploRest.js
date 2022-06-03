//CRUD
/*
create
read
update
delete
*/

const express = require('expresss')

const app = express()

let contadorVisitas = 0

app.get('/', (req,res) => {
    res.send(`
<h1> Desafio Express</h1>
<p>Esto es un texto</p>
<a href="/visitas">visitas</a>
`)
})

app.get('/', ({query} ,res) => {
    // const { query } = req
    console.log(query)
    res.json({mensaje: 'Recibi una peticion con metodo "get"'})
})

app.post('/:id',({ params }, res) => {
    console.log(params)
    res.json({mensaje: 'Recibi una peticion con metodo "post"'})
})

app.post('/:id',({ body }, res) => {
    console.log(body)
    res.json({mensaje: 'Recibi una peticion con metodo "post"'})
})


app.put('/',({ body,params },res) => {
    console.log(body, params)
    res.json({mensaje: 'Recibi una peticion con metodo "put"'})
})

app.delete('/', (req,res) => {
    res.json({mensaje: 'Recibi una peticion con metodo "delete"'})
})

app.get('/saludos/salida', (req,res) => {
    //console.log(req.url)
    res.send('chau mundo')
})

app.get('/fyh', (req,res) => {
    const fecha = new Date()
    const fechaStr = fecha.toLocaleDateString()
    res.send({
       fyh: fechaStr 
    })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log (`Error en el servidor ${error}`))
