const PokedexGenerationFilter = ({
  generations,
  selectedGeneration,
  onSelect,
}) => {
  return (
    <div className="pokedex-generation-filter">
      {generations.map((generation) => (
        <button
          key={generation}
          onClick={() => onSelect(generation)}
          className={generation === selectedGeneration ? "selected" : ""}
        >
          Generation {generation}
        </button>
      ))}
    </div>
  );
};

export default PokedexGenerationFilter;
