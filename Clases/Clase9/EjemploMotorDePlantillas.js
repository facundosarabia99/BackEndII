const fs = require('fs')

const motordeplantillas = require('./motordeplantillas')


const Contexto = {
    nombre: 'marian'
}

const TemplateString = motordeplantillas.Compilar(Contexto)

//console.log(TemplateString)

fs.writeFileSync('index.html', templateString)