const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes;
const [ , p2] = personajes;

console.log(p1);
console.log(p2);

const retornaArreglo = () =>{
    return ['ABC', 123];
}
    
const arr = retornaArreglo();
console.log(arr);
 
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const State = (valor) =>{
    return [ valor, () => {console.log('Hola mundo')}];
}
const [nombre, setNombre] = State('Goku');
console.log(nombre);
setNombre();