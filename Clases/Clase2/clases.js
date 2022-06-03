class Cliente{
    constructor(nombre, apellido, fecha){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fecha;
    }

    static empresa = 'Coderhouse'

    verStringDePresentacion(){
        return `nombre: ${this.nombre}`
    }
}

const cliente1 = new Cliente ('Facundo', 'Sarabia', '09,01,99')
const cliente2 = new Cliente ('Andrea', 'Pollero', '12,02,70')

console.log(cliente1)
console.log(cliente2)

console.log(cliente1.verStringDePresentacion())
console.log(cliente2.verStringDePresentacion())

console.log(Cliente.empresa)

