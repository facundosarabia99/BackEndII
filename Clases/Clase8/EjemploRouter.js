const express = require('express')
const { Router } = express

const app = express()
const router = Router() /*CREAR EL ROUTER*/
//ESTE ROUTER TIENE UNA URL LLAMADA /RECURSO

//MANEJADORES

router.get('/recurso', (req, res) => {
    res.send('get ok')
})

router.post('/recurso', (req, res) => {
    res.send('post ok')
})



//CARGAR ROUTER EN RUTA PARTICULAR URL= 'API'
//como a esta app le cargo el controlador "router.get..", el controlador escucha la url /api  /recurso 
app.use('/api', router)

app.listen(8080)

// api es diferente a pagina web