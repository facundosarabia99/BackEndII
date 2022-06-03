function nombre(parametros1,parametros){

}

function sumar(num1, num2){
    return num1 + num2
}

console.log(sumar(4,5))
console.log(sumar('Hola', 'Como estasjemplos'))

function cuentaDoble(num1, num2, operacion){
    const result1 = operacion(num1, num2)
    const result2 = operacion(num1, num2)
    return result1 + result2
}

console.log(cuentaDoble(2,3,sumar))


const mostrarPalabra = function (p) {console.log(p)}
mostrarPalabra('hola')

(function (p) {console.log(p)})

(function (p) {console.log(p)})('Chau')

/* function crearMultiplicador(num){

    function x(n){
        return 2 * n
    }
}

function doble(n){
    return 2 * n
}*/

function crearMultiplicador(multip){

    return function (n){
        return multip * n
    }
}

const doble = crearMultiplicador(2)
const triple = crearMultiplicador(3)
const cuadruple = crearMultiplicador(4)

console.log(doble(10))
console.log(triple(10))
console.log(cuadruple(10))

function generarSaludo(nombre){
    return 'hola', + nombre + '!!!'
}

function generarSaludoSospechoso(){
    return 'hola', + nombre + '//'
}

function generarSaludosGenericos(){
    return generarSaludo()
}


        /*EJEMPLO CLOSURE*/

function crearGritarNombre(nombre){
    const signosDeExclamacion = '!!!'
    return function(){
        console.log(`${nombre}${signosDeExclamacion}`)
    }
}


const nombre = "Facundo"
const fraseLarga = `Hola como estas ${nombre}, todo bien? - ${sumar(2,3)}`
console.log(fraseLarga)