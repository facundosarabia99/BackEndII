import express from 'express'
import 'dotenv/config'

import { sessionHandler as session } from './middlewares/session.js'
import { passportMiddleware, passportSessionHandler } from './middlewares/passport.js'

import { usuariosRouter } from './routers/usuariosRouter.js'
import { authRouter } from './routers/authRouter.js'
import { datosRouter } from './routers/datosRouter.js'
import { infoRouter } from './routers/infoRouter.js'
import { randomsRouter } from './routers/randomsRouter.js'


const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session)
app.use(passportMiddleware)
app.use(passportSessionHandler)


// rutas
app.use('/api/usuarios', usuariosRouter)
app.use('/auth', authRouter)
app.use('/api/datos', datosRouter)
app.use('/info', infoRouter)
app.use('/api/randoms', randomsRouter)


// puerto
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})