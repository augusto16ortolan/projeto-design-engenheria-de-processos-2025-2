import axios from "axios";

export async function getPokemonList() {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  let pokemonList = response.data.results;
  return pokemonList.map((pokemon) => {
    const numero = pokemon.url.match(/\/(\d+)\/?$/)[1];
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`;

    return {
      id: numero,
      name: pokemon.name,
      image: imageUrl,
      url: pokemon.url,
    };
  });
}

export async function getPokemonBy(url) {
  const response = await axios.get(url);
  const pokemon = response.data;

  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    types: pokemon.types.map((t) => t.type?.name).join(", "),
    sprites: pokemon.sprites,
  };
}
