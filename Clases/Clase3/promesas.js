function dividir(dividendo,divisor){
    if (divisor == 0){
        throw new console.error('no se puede dividir por cero');
    }    
    return dividendo / divisor
}

const resultado = dividir (4, 2)
const resultado2 = dividir(resultado, 2)

let datos 

fetch('link files')
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        console.log(json)
    })

    console.log(datos)