const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


/** Component for creating card element with pokemon details */

function Pokecard({ name, id, type }) {
  //add styles in css file
  const divStyles = {
    width: "200px",
    border: "2px black solid",
    backgroundColor: "gray",
    borderRadius: "10px"
  };
  const center = {
    textAlign: "center"
  }
  const imgStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }

  return(
    <div className="pokecard" style={divStyles}>
      <h1 className="pokecard-name" style={center}>{name}</h1>
      <img className="pokecard-img" src={`${BASE_URL}${id}.png`}
        alt="pokemon" style={imgStyles}/>
      <p className="pokecard-type" style={center}>{type}</p>
    </div>
  )
}

export default Pokecard;
