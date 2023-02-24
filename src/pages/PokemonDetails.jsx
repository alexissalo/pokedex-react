import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const PokemonDetails = () => {
  const { poke } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name, id, types, height, weight, stats, sprites } = pokemon;
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [poke]);

  const typeClasses = types
    ? types.map((type) => `pokedex-list-item-type-${type.type.name}`).join(" ")
    : console.log("Cargando...");

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className={`pokemon-details ${typeClasses}`}>
          <h2>{name}</h2>
          <button onClick={() => setShiny(!shiny)} className={shiny? "selected-shiny": "shiny"}>★</button>
          <div>
            {shiny ? (
              <img src={sprites.front_shiny} alt={name}/>
            ) : (
              <img src={sprites.front_default} alt={name} />
            )}
          </div>
          <p>Id: {id}</p>
          <p>Height: {height}m</p>
          <p>Weight: {weight}kg</p>
          <h3>Types:</h3>
          <ul>
            {types.map((type) => (
              <li
                key={type.slot}
                className={`pokedex-list-item-type-${type.type.name} pokedex-list-item-types-text`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
          <h3>Stats:</h3>
          <table>
            <thead>
              <tr>
                <th>Stat</th>
                <th>Base</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((stat) => (
                <tr key={stat.stat.name}>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td>{stat.effort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
