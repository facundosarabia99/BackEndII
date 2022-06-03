console.log('hola')
console.Console('chau')

const http = require('https') 

const server =http.createServer((peticion, respuesta)=> {
    respuesta.end('Hola mundo')
})

const connectedServer = server.listen(8080,() => {
    console.log(`Servidor Http escuchando en el puerto ${conectedServer.address().port}`)
})