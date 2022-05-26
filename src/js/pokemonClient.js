class PokemonClient {
  constructor() {
    this.fetchArray = [];
    this.url = `https://pokeapi.co/api/v2/pokemon`;
  }

  fetchPokemon(pokemonId) {
    return fetch(`${this.url}/${pokemonId}`)
      .then((response) => response.json())
      .catch(() => alert(`Failed to fetch with id ${pokemonId}`));
  }
}
