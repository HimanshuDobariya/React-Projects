import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  const fetchpokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=124"
      );

      let postData = await response.json();

      const detailedPokemonData = postData.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      setData(detailedResponses);
      setLoading(false);
    } catch (err) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchpokemon();
  }, []);

  const filterData = data?.filter((item) => {
    return item.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#EFF3FF] py-4 px-3 md:px-6">
      <h1 className=" text-4xl md:text-5xl text-center font-bold text-slate-700">
        Lets Catch Pokémon
      </h1>

      <div className=" mt-8 max-w-96 mx-auto">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          className="w-full px-4 py-2 text-[18px] outline-none shadow-md rounded"
        />
      </div>

      <div className="w-ful mt-6">
        {loading && (
          <p className="text-4xl md:text-5xl text-center font-bold text-slate-500">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-4xl md:text-5xl text-center font-bold text-slate-500">
            There was an error loading the users
          </p>
        )}

        {!loading && !error && (
          <ul className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
            {filterData.map((currPokemon) => {
              return (
                <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
