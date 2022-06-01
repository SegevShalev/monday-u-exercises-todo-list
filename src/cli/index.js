import chalk from "chalk";
import { Command } from "commander";
import PokemonClient from "./pokemonClient.js";

import { addTodo, getId } from "./fileManager.js";

let id = 0;

const program = new Command();
const pokemonClient = new PokemonClient();

program.name("Todo App").description(`Best Todo App on CLI!`).version("1.0.0");

program
  .command("add")
  .description("What do you want to do today?")
  .argument("<string>", "input")
  .action(async (input) => {
    id = await getId();

    if (isNaN(input)) {
      return addTodo({ name: input, id: id, pokemonId: -1 });
    }
    pokemonClient.fetchPokemon(input).then((data) => {
      return addTodo({
        name: data.name,
        id: id,
        pokemonId: data.id,
      });
    });
  });

//program get
//program getall
//program delete

program.parse();
