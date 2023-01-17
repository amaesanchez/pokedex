const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


/** Component for creating card element with pokemon details */

function Pokecard({ name, id, type }) {
  //add styles in css file

  return (
    <div className="pokecard">
      <h1 className="pokemon-text">{name}</h1>
      <img className="pokecard-img" src={`${BASE_URL}${id}.png`}
        alt="pokemon" />
      <p className="pokemon-text">{type}</p>
    </div>
  );
}

export default Pokecard;
