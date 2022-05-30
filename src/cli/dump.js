import fetch from "node-fetch";
import chalk from "chalk";
import { Command } from "commander";

let todosArray = [{ name: "balbazaur", id: 1, pokemonId: 26 }];
let COUNTER = 0;

const program = new Command();
program.name("Todo App").description(`Best Todo App on CLI!`).version("1.0.0");

program
  .command("add")
  .description("What do you want to do today?")
  .argument("<string>", "input")
  .action((input) => {
    let inputArray = input.split(",");

    const isInputContainNaN = [...inputArray].some((item) => {
      let parseToInt = parseInt(item);
      return isNaN(parseToInt);
    });
    if (isInputContainNaN) {
      todosArray.push({ name: input, id: ++COUNTER, pokemonId: -1 });
      return console.log("new todo added!");
    }
    let promisesArray = inputArray.map((item) => {
      return fetchPokemon(item);
    });
    Promise.all(promisesArray).then((promiseFullfield) => {
      promiseFullfield.forEach((data) => {
        if (data?.name) {
          const isPokemonIdExist = [...todosArray].some((item) => {
            return item.pokemonId === data.id;
          });
          const pokemontypes = data.types.map((typeItem) => {
            return typeItem.type.name;
          });
          const detailedPokemon = `${data.name}, type:${pokemontypes.join(
            " - "
          )}`;
          if (!isPokemonIdExist) {
            todosArray.push({
              name: detailedPokemon,
              id: ++COUNTER,
              pokemonId: data.id,
            });
            return console.log("new pokemon to catch!");
          }
          return console.log(`pokemon id ${data.id} already exist!`);
        }
      });
    });
  });

program
  .command("get-all")
  .description("What do you want to do today?")
  .action(() => {
    console.log(todosArray);
  });

program.parse();

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .catch(() => console.log(`Failed to fetch with id ${pokemonId}`));
}
