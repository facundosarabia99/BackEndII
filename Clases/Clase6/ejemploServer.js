const http = require('https') 

/*cconst server =http.createServer((peticion, respuesta)=> {
    console.log('llego un evento')
    respuesta.end('Hola mundo')
})*/

const connectedServer = server.listen(8080,() => {
    console.log(`Servidor Http escuchando en el puerto ${conectedServer.address().port}`)
})

/*OTRO EJEMPLO*/

const server = http.createServer ((peticion, respuesta)=> {
    const {url: ruta } = peticion switch (ruta) {
        case '/llegada':
            respuesta.end('hola mundo')
            break
        case '/llegada':
            respuesta.end('hola mundo')
            break
        default:
            respuesta.end('ok...')
            break
    }
    console.log('llego un evento')
    respuesta.end('Hola mundo')
})
