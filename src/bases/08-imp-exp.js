// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes';

import heroes from "../data/heroes";

// console.log(owners)

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(1));

const getHeroesByOwnwer = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroesByOwnwer('DC'));

export { getHeroeById, getHeroesByOwnwer };
