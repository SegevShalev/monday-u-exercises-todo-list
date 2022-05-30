import fetch from "node-fetch";
import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import FileManager from "./fileManager.js";
import PokemonClient from "./pokemonClient.js";

let COUNTER = 0;

const program = new Command();
const fileManager = new FileManager();
const pokemonClient = new PokemonClient();

program.name("Todo App").description(`Best Todo App on CLI!`).version("1.0.0");

program
  .command("add")
  .description("What do you want to do today?")
  .argument("<string>", "input")
  .action((input) => {
    if (isNaN(input)) {
      fileManager.todos.push({ name: input, id: ++COUNTER, pokemonId: -1 });
      return console.log("new todo added!");
    }
    pokemonClient.fetchPokemon(input).then((data) => {
      fileManager.todos.push({
        name: data.name,
        id: ++COUNTER,
        pokemonId: data.id,
      });
      console.log(fileManager.todos);
      return console.log("new todo added!");
    });
  });

program.parse();
