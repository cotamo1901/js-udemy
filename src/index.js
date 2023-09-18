import { getHeroeById } from "./bases/08-imp-exp";
import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(1);
//     resolve(heroe)
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log("Then de la promesa",heroe);
// });




const getHeroeByIdAsync=(id)=>{

return new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(1);
    resolve(heroe)
  }, 2000);
});

}

getHeroeByIdAsync(10).then(heroe=>console.log('Heroe',heroe))
