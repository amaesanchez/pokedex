import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import { choice, remove } from "./helpers.js";

const POKEMON = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

/** randomly selects 4 pokemon from the pokemon array
 * removes it from the array
 * returns the array of 4 random pokemon
 */
function randomHand(POKEMON) {
  let pokeArray = [];
  for (let i = 0; i < 4; i++) {
    const choicePokemon = choice(POKEMON);
    pokeArray.push(choicePokemon);
    remove(POKEMON, choicePokemon);
  }
  return pokeArray;
}
//2 variables to store four cards each

/** Component for creating deck of pokecards */
function Pokegame({ pokemon = POKEMON }) {
  const hand1 = randomHand(pokemon);

  const hand1Exp = hand1.reduce(function (prev, cur) {
    return prev + cur.base_experience;
  }, 0);

  const hand2 = randomHand(pokemon);

  const hand2Exp = hand2.reduce(function (prev, cur) {
    return prev + cur.base_experience;
  }, 0);


  return (
    <div className="Pokegame">
      <h2>Hand 1</h2>
      <div className="Pokedex">
        <Pokedex pokemon={hand1} handExp={hand1Exp} isWinner={hand1Exp > hand2Exp ? true : false} />
      </div>
      <h2>Hand 2</h2>
      <div className="Pokedex">
        <Pokedex pokemon={hand2} handExp={hand2Exp} isWinner={hand2Exp > hand1Exp ? true : false} />
      </div>
    </div>
  );
}

export default Pokegame;