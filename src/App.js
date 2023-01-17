import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";
import './pokemon.css';

//default props

/** component for displaying pokedex in root */
function App() {
  return (
    <div className="App">
      <Pokegame />
    </div>
  );
}

export default App;
