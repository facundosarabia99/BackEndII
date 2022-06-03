//CRUD
/*
create
read
update
delete
*/

const routerAutos = require('./routers/routerAutos.js')
const routerBicicletas = require('./routers/routerBicicletas.js')


const express = require('expresss')
const app = express()

app.use(express.urlencoded({ extend: true}))  /*SIEMPRE CARGAR PARA USAR COSAS DE AFUERA*/
app.use(express.json()) /*SIEMPRE CARGAR PARA USAR COSAS DE AFUERA*/


//creada aplicacion de autos y bici

app.use('/api/Autos', routerAutos)
app.use('/api/Bicicletas', routerBicicletas)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log (`Error en el servidor ${error}`))
