//Objetos literales {} son diccionarios
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55216846,
        lat: 14.326,
        lng: 32.48451
    }
};

console.log( persona );
//console.table( persona );


//asigna la posición de memoria a persona2, no se debería hacer.
const persona2 = persona;

//asigna el objeto a persona3, así es como se debería hacer.
const persona3 = {...persona};
console.log( persona3 );