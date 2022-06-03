const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } =require ('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

const mensajes = []

io.on('conection', (socket) => {

    socket.emi('mensajesActualizados', mensajes)

    socket.on('nuevoMensaje'), mensajes => {
        mensajes.fecha = new Date().toLocaleDateString()
        mensajes.push(mensajes)
        socket.emit('mensajesActualizados', mensajes)
    }
    
})

const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en el puerto ${server.adress().port}`)
})