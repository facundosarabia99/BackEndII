const contexto = {
    nombre: 'marian'
}

const templateString = `hola, me llamo ${contexto.nombre}`

console.log(templateString)

// mismo que 

function Compilar(Contexto){
    return `hola me llamo ${Contexto.nombre} `
}

const Contexto = {
    nombre: 'marian'
}

const TemplateString = Compilar(Contexto)

console.log(TemplateString)