import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CardPokemon from "../components/CardPokemon";
import { fetchAllPokemon } from "../services/GetPokemon";
import ScrollButton from "../components/ScrollButton";
import Loader from "../components/Loader";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(500);

  useEffect(() => {
    const fetchAll = async () => {
      const allPokemon = await fetchAllPokemon(limit);
      setPokemon(allPokemon);
      setLoading(false);
    };
    fetchAll();
  }, [limit]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMoreClick = () => {
    setLimit(limit + 508);
  };

  const handleResetLimitClick = () => {
    setLimit(500);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="pokedex">
            <ScrollButton />
            <h1>Pokedex</h1>
            <>
              <input
                type="text"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={handleSearch}
                className="pokedex-search"
              />
              <div className="pokedex-list">
                {filteredPokemon.map((poke) => (
                  <CardPokemon
                    id={poke.id}
                    name={poke.name}
                    types={poke.types}
                  />
                ))}
              </div>
            </>
          </div>
          <div className="pokedex-load-more">
            {limit === 1008 ? (
              <button
                onClick={handleResetLimitClick}
                className="reset-more-btn"
              >
                Reset Limit
              </button>
            ) : (
              <>
                <button onClick={handleLoadMoreClick} className="load-more-btn">
                  Load More
                </button>
                <button
                  onClick={handleResetLimitClick}
                  className="reset-more-btn"
                >
                  Reset Limit
                </button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
