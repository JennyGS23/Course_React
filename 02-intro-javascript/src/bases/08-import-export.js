//import and export of function}

import {heroes} from '../data/heroes'


console.log(heroes)

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if(heroe.id === id){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
// }

//Con find retorna el primero encontrado
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
//console.log(getHeroeById(2));

//con filter retorna todos los que coincidan
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));



