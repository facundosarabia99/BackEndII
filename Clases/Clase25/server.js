import express, { json }  from "express";
import session from "express-session";

const app= express();


//Milware de json para poder recibir cosas
app.use(express.json());

app.get('/', (_, res) => {
    res.send('ok')
});

function crearErrorDatos(mensaje){
    const error = new Error(mensaje)
    error.tipo = 'FALTAN DATOS'
    return error
}
function crearUsuario(datos){
    if(!datos.username) {
        throw crearErrorDatos('Falta el campo obligatoria"username"')
    }

    if (!datos.password) {
        throw crearErrorDatos('Falta el campo obligatoria"password"')
    }

    if (datos.address){
        throw crearErrorDatos('Falta el campo obligatoria"address"')
    }

    const usuario = {
        username: datos.username,
        password: datos.password,
        address: datos.address,
    }

    return usuario;
}

function crearId(random = 'blabla'){
    return `${Date.now()} - ${random}`
}


const usuariosArray = []
const usuarios = {
    guardar: async usuario => {
        usuarios.id = crearId();
        usuariosArray.push(usuario);
    },
    obtenerTodos: async () => {
        return usuariosArray;
    }
}

app.post('/api/usuarios', async (req, res, next) => {
    try {
    const datosUsuraio = req.body
    const usuario = crearUsuario(datosusuraio)
    await usuarios.guardar(usuario)
    res.status(201).json(usuario)
    } catch (error) {
        next(error)
    }
})

app.get('/api/usuarios' ,(req, res, next) => {
    try {
        res.json(await usuarios.obtenerTodos())
    } catch (error) {
        next(error)
    }
})


app.use((err, req, res, next) => {
    switch (error.tipo) {
        case 'FALTAN DATOS':
            res.status(400)
            break
        default:
            res.status(500)
    }
    res.json({msj: error.message})
})


const server = app.listen(8080, () => {
    console.log(`Escuchando en el ${server.address().port}`);
});

