import React from "react";

const PokemonCards = ({ pokemonData }) => {
  const pokemonDetails = [
    {
      text: "Height",
      data: pokemonData.height,
    },
    {
      text: "Weight",
      data: pokemonData.weight,
    },
    {
      text: "Speed",
      data: pokemonData.stats[5].base_stat,
    },
    {
      text: "Experience",
      data: pokemonData.base_experience,
    },
    {
      text: "Attack",
      data: pokemonData.stats[1].base_stat,
    },
    {
      text: "Abilities",
      data: pokemonData.abilities
        .map((abilityName) => abilityName.ability.name)
        .slice(0, 1),
    },
  ];

  return (
    <>
      <div className="bg-white py-4 px-6 rounded-md flex flex-col items-center space-y-6 relative ">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-[60%] max-h-56 min-h-52"
        />
        <h1 className="text-4xl font-bold capitalize text-center">
          {pokemonData.name}
        </h1>
        <p className="text-center bg-green-500 py-1 px-4 text-white text-xl font-bold rounded-full">
          {pokemonData.types.map((currType) => currType.type.name).join(", ")}
        </p>

        <div className="w-full grid grid-cols-3 gap-y-4">
          {pokemonDetails.map(({ text, data }, index) => (
            <p key={index} className="font-medium text-center">
              <span className="font-bold">{text}</span> <br /> {data}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonCards;
