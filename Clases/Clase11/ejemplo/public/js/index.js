const socket = io()

socket.on('mi mensaje', data => {
    console.log('(cliente)' + data)

    socket.emit('msg-cliente', `(cliente) recibi: ${data}`)
})

socket.on('heartbeat', () => {
    console.log('todo ok')
})

const botonSaludar = document.getElementById('botonSaludar')
botonSaludar.addEventListener('click', e => {
    saludar()
})

function saludar(){
    socket.emit('saludo', 'saludo desde el cliente!')
}