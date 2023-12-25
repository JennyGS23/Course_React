//Funciones en JS
const saludar = function (nombre){
    return `hola, ${nombre}`;
}

//funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;


console.log(saludar)
console.log(saludar2('Vegeta'));
console.log(saludar3('Vegeta'));


