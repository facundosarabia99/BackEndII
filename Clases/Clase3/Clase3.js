const diccionario = {
    nombre: 'Pilu',
    rol: 'estudiante',
    edad: 23,
    color: 'blanco'
}


const { nombre } = diccionario
console.log(nombre)

function haceralgotresveces(algo){
    console.log(algo())
    console.log(algo())
    console.log(algo())
}

haceralgotresveces(function () { return 5})