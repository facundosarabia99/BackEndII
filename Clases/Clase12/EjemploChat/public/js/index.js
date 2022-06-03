const socket = io()

socket.on('mensajesActualizados', data => {
    console.log(data)
})

const inputMensaje = document.getElementById('inputMensaje')
const botonEnviar = document.getElementById('botonEnviar')
botonEnviar.addEventListener('click', e => {
    inputMensaje.value
    socket.emit('nuevoMenaje', '')
})



const botonEnviar = document.getElementById('botonEnviar')
botonEnviar.addEventListener('click', e => {
    socket.emit('nuevoMensaje', 'hola mundo')
})

