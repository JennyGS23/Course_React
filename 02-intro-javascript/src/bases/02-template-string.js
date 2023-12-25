//Variables y Constantes

const nombre = 'Jennifer';//valor fijo
const apellido = 'Gonzalez';

//forma de concatenar
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto1 = `${ nombre } ${ apellido }`;


console.log(nombreCompleto1);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);