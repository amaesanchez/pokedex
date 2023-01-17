import Pokecard from "./Pokecard";

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

/** Component for creating deck of pokecards */
function Pokedex({ pokemon = POKEMON, handExp, isWinner }) {
  //big nono
  return (
    <div className="Pokedex">
      {pokemon.map(poke =>
        <Pokecard name={poke.name}
          id={poke.id}
          type={poke.type}
          base_experience={poke.base_experience} />)}
      <h2>Total Hand Exp: {handExp}</h2>
      <h1>{isWinner ? "This hand wins!" : ""}</h1>
    </div>
  );
}

export default Pokedex;
