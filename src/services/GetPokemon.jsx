
export const fetchAllPokemon = async (limit) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const pokemon = await Promise.all(
      data.results.map(async (result) => {
        const response = await fetch(result.url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pokemonData = await response.json();
        const types = pokemonData.types.map((type) => type.type.name);
        return {
          id: pokemonData.id,
          name: result.name,
          types: types,
        };
      })
    );
    return pokemon;
  } catch (error) {
    console.error("Error fetching all pokemon", error);
  }
};
