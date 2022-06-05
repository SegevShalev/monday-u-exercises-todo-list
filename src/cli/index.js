#!/usr/bin/env node

import { Command } from "commander";

import PokemonClient from "./pokemonClient.js";
import { addTodo, printAllTodos, deleteTodo } from "./fileManager.js";

let id = 0;

const program = new Command();
const pokemonClient = new PokemonClient();

program.name("Todo App").description(`Best Todo App on CLI!`).version("1.0.0");

program
  .command("add")
  .description(
    `To add new todo please enter a String or number to catch a pokemon!
      to add todo command "npm run cli add <input>" on console!`
  )
  .argument("<string>", "input")
  .action(async (input) => {
    if (isNaN(input)) {
      return addTodo({ name: input, pokemonId: -1 });
    }
    pokemonClient.fetchPokemon(input).then((data) => {
      return addTodo({
        name: `catch ${data.name}`,
        pokemonId: data.id,
      });
    });
  });
program
  .command("get")
  .description(
    `This command will return all the todos on file!
    to get all todos command "npm run cli get " on console!`
  )
  .action(async () => {
    await printAllTodos();
  });

program
  .command("delete")
  .description(
    `This command will delete the todo by id!
      to delete todo command "npm run cli delete <id> " on console!`
  )
  .argument("<number>", "id")
  .action(async (id) => {
    await deleteTodo(id);
  });

program.parse();
