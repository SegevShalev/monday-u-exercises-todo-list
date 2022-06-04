import fetch from "node-fetch";

export default class PokemonClient {
  constructor() {
    this.url = `https://pokeapi.co/api/v2/pokemon`;
  }

  async fetchPokemon(pokemonId) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/5`);
    if (!res.ok) {
      console.error("failed to catch pokemon", { status: res.status });
      throw Error(`failed to catch pokemon with id${pokemonId}`);
    }
    return await res.json();

    /*   .then((response) => response.text())
      .then((text) => console.log("response text: ", text))
      .catch((error) => {
        console.error(`Failed to fetch with id ${pokemonId}`, error);
        // return { data: { name: "failed to catch" } };
      }); */
  }

  fetchPokemon2(pokemonId) {
    data = { name: "idan", id: 50 };

    return new Promise((res, rej) => res(data));
  }
}
