function Compilar(plantilla, Contexto){
    const separados = plantilla.split('%')
    return `hola me llamo ${Contexto.nombre} `
}

module.exports = {
    Compilar
}