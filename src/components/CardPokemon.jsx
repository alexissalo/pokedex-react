import { Link } from "react-router-dom";

function CardPokemon({ name, id, types }) {
  return (
    <Link to={`/details/${name}`} style={{ textDecoration: "none" }}>
      <div className={`pokedex-list-item pokedex-list-item-type-${types[0]}`}>
        <div className="pokedex-item-img">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
        </div>
        <div className="list-item-name">
          <p>{name}</p>
        </div>
        <div>
          <div className="pokedex-list-item-types">
            {types.map((type) => (
              <p className={`pokedex-list-item-type-${type} pokedex-list-item-types-text`}>{type}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardPokemon;
