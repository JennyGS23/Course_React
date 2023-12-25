//Promesas

import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout( ()=>{
//         const heroe = getHeroeById(2);
//         //console.log(heroe)
//         //console.log('2 segundos después')
//         resolve(heroe)
//     }, 2000)
// });


// promesa.then((heroe) =>{
//     console.log('heroe: ', heroe)
// })


const getHeroeByIdAsyng = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout( ()=>{
            const heroe = getHeroeById(2);
            if(heroe) {
                resolve(heroe)
            } else{
                reject('No se pudo encontrar el héroe');
            }
            
        }, 2000)
    });
    return promesa;
}

getHeroeByIdAsyng(4)
    .then(console.log)
    .catch(console.warn);