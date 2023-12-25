//Desestructuración

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Iroman'
};


//Extraer el nombre del objeto persona
const {nombre} = persona;
console.log(nombre);




const retornaPersona = ( usuario ) =>{
    const{edad, clave, nombre} = usuario;
    console.log(edad, clave, nombre)
}
retornaPersona( persona );


const retornaPersona2 = ( {nombre} ) =>{
   
    console.log(nombre)
}
retornaPersona2( persona );