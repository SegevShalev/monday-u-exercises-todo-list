import fetch from "node-fetch";

export default class PokemonClient {
  constructor() {
    this.url = `https://pokeapi.co/api/v2/pokemon`;
  }

  async fetchPokemon(pokemonId) {
    const res = await fetch(this.url + "/" + pokemonId);
    if (!res.ok) {
      console.error("failed to catch pokemon", { status: res.status });
      throw Error(`failed to catch pokemon with id ${pokemonId}`);
    }
    return await res.json();
  }
}
