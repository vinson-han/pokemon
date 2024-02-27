import useRequest from "../hooks/useRequest";

const Pokemon = ({ pokemon }) => {
  const name = pokemon.name;

  const { data, error, isLoading } = useRequest("/pokemon", name);

  const ErrorHandling = () => {
    if (isLoading) return <div>Loading Pokemon data...</div>;
    else if (error)
      return <div>{error}: There was an error with getting data</div>;
  };

  if (!data) return <h1>isLoading</h1>;
  else if (error) {
    return <div>{error}: There was an error with getting data</div>;
  } else {
    return (
      <>
        {data && (
          <div className="card">
            <span className="card-id">#{data.id}</span>
            <img
              className="card-sprite"
              src={data.sprites.front_default}
              alt={name}
            />
            <h2 className="card-name">{name}</h2>
            <span className="card-details">
              <h3>
                <i>Type</i>
              </h3>
              <ul className="types-list">
                {data.types.map((poke) => (
                  <li key={poke.type.name}>{poke.type.name.toUpperCase()}</li>
                ))}
              </ul>
            </span>
          </div>
        )}
        : {<ErrorHandling />}
      </>
    );
  }
};

export default Pokemon;
