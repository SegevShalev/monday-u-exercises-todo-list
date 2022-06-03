import chalk from "chalk";
import { Command } from "commander";
import PokemonClient from "./pokemonClient.js";

import { addTodo, getId, getAllTodos, deleteTodo } from "./fileManager.js";

let id = 0;

const program = new Command();
const pokemonClient = new PokemonClient();

program.name("Todo App").description(`Best Todo App on CLI!`).version("1.0.0");

program
  .command("add")
  .description(
    `To add new todo please enter a String or number to catch a pokemon!
      to add todo command "node index add <input>" on console!`
  )
  .argument("<string>", "input")
  .action(async (input) => {
    id = await getId();

    if (isNaN(input)) {
      return addTodo({ name: input, id: id, pokemonId: -1 });
    }
    pokemonClient.fetchPokemon(input).then((data) => {
      return addTodo({
        name: `catch ${data.name}`,
        id,
        pokemonId: data.id,
      });
    });
  });
program
  .command("get")
  .description(
    `This command will return all the todos on file!
    to get all todos command "node index get " on console!`
  )

  .action(async () => {
    const allTodos = await getAllTodos();
    allTodos.forEach((todo) => {
      console.log(todo.name);
    });
  });

program
  .command("delete")
  .description(
    `This command will delete the todo by id!
      to delete todo command "node index delete <id> " on console!`
  )
  .argument("<number>", "id")
  .action(async (id) => {
    await deleteTodo(id);
  });

program.parse();
