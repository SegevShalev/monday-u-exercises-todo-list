const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon";
let requestsArray = [];

async function fetchPokemon(pokemonId) {
  const date = new Date();
  let curretHour = parseInt(date.getHours());
  let curretMinute = parseInt(date.getMinutes());
  const isThisRequestExist = [...requestsArray].some((item) => {
    if (
      item.id === pokemonId &&
      item.hour === curretHour &&
      curretMinute - item.minute < 2
    ) {
      return true;
    }
  });
  if (isThisRequestExist) {
    return {
      name: `Request overload with id: ${pokemonId}:please wait 2 minutes before trying again`,
    };
  }
  try {
    const res = (await axios.get(url + "/" + pokemonId)).data;
    if (!res) {
      console.error("failed to catch pokemon", { status: res.status });
      throw Error(`failed to catch pokemon with id ${pokemonId}`);
    }
    requestsArray.push({
      id: pokemonId,
      hour: curretHour,
      minute: curretMinute,
    });
    return res;
  } catch {
    return { name: "something went wrong" };
  }
}

module.exports = { fetchPokemon };
