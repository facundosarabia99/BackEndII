const { consumers } = require("stream");

var nombre= 'hola'   /*NO USAR. USAR LET Y CONST*/

const nombre= 'hola'

let edad= 35

edad= 36

let i= 0;
function foo() {
    i=1;
    let j = 2;
    if(true) {
        console.log(i);
        console.log(j);
    }
}
foo();

function foo() {
    let i = 0;
    if(true){
        let i= 1;
        console.log(i);
    }
    console.log(i);
  }
  foo();


  const array = [1, 2, 3, 4, 5]

  const diccionario = {
      nombre:'marian',
      apellido: 'sarabia',
      rol: 'estudiante'
  }

  array.push(6)

  diccionario['pais']= 'argentina'
  diccionario.provincia = 'BSAS'