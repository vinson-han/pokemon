import PokemonLogo from "./images/pokemon.png";
import "./styles/App.css";
import useRequest from "./hooks/useRequest";
import Pokemon from "./components/Pokemon";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const { isLoading, data, error } = useRequest("/pokemon");

  const DisplayPokemon = () => {
    if (data) {
      return (
        <div className="row">
          {data.results.map((pokemon) => {
            return <Pokemon key={pokemon.name} pokemon={pokemon} />;
          })}
        </div>
      );
    }
  };

  const ErrorHandling = () => {
    if (isLoading) return <div>Loading Pokemon data...</div>;
    else if (error)
      return <div>{error}: There was an error with getting data</div>;
  };

  return (
    <>
      <img className="pokemon-logo" src={PokemonLogo} />
      <AudioPlayer />
      {data ? <DisplayPokemon /> : <ErrorHandling />}
    </>
  );
}

export default App;
