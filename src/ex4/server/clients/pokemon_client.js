import axios from "axios";
const url = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(pokemonId) {
  try {
    const res = (await axios.get(url + "/" + pokemonId)).data;
    if (!res) {
      console.error("failed to catch pokemon", { status: res.status });
      throw Error(`failed to catch pokemon with id ${pokemonId}`);
    }
    return res;
  } catch {
    return { name: "something went wrong" };
  }
}
