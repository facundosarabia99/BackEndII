const express = require('express')
const { routerPersonas } = require("./Router/routerPersonas.js")
const { routerMascotas } = require("./Router/routerMascotas.js")

const app = express()
app.use(express.urlencoded({ extend: true}))  /*SIEMPRE CARGAR PARA USAR COSAS DE AFUERA*/
app.use(express.json())
app.use(express.static('public'))

//Cargo los routers
app.use('/api/personas', routerPersonas)
app.use('/api/mascotas', routerMascotas)



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
