const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } =require ('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

app.get('/', () => {
    res.send('ok')
})

io.on('conection', (socket) => {
    //"Conection" se ejecuta por primera vez que se abre nueva conexion
    console.log('Usuario conectado' + socket.id)

    //Se imprimira solo la primera vez que se ha abierto la conexion
    socket.emit('mi mensaje', "Este es mi mensaje desde el servidor")

    socket.on('msg-cliente', data => {
        console.log(`(server) recibi: ${data}`)
    })

    socket.on('saludo', data => {
        console.log(`(server) recibi: ${data}`)
    })

    //setInterval(() => { socket.emit('heartbeat', 'estoy vivo')}, 3000)

    io.sockets.emit('mi mensaje', 'esto lo reciben todos')
    
})

const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en el puerto ${server.adress().port}`)
})