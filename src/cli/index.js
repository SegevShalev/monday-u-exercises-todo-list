#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";

import PokemonClient from "./pokemonClient.js";
import {
  addTodo,
  printAllTodos,
  deleteTodo,
  displayAscii,
} from "./fileManager.js";

const questions = [
  {
    type: "list",
    message: "What Todo you wanna do?",
    name: "command",
    choices: ["Add", "Get", "Delete", "Catch"],
  },
  {
    type: "input",
    message:
      "please enter a valid argument. if you chose `Get` command just press enter again!",
    name: "input",
  },
];

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
    return await addToTodoList(input);
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
      to delete todo command "npm run cli delete <todo number> " on console!`
  )
  .argument("<number>", "id")
  .action(async (id) => {
    await deleteTodo(id);
  });

program
  .command("catch")
  .description(
    `
  This command will display the Todo in Ascii!
    to display in ascii command "npm run cli catch <todo number> on console! `
  )
  .argument("<number>", "id")
  .action(async (id) => {
    await displayAscii(id);
  });

program
  .command("interactive")
  .description(
    `
 make this cli more user friendly!
    to display this cli interactively command npm run cli interactive on console!`
  )
  .action(async () => {
    await todoInquirer();
  });

program.parse();

async function todoInquirer() {
  inquirer.prompt(questions).then(async (answers) => {
    switch (answers.command) {
      case "Get":
        await printAllTodos();
        break;
      case "Add":
        await addToTodoList(answers.input);
        break;
      case "Delete":
        await deleteTodo(answers.input);
        break;
      case "Catch":
        await displayAscii(answers.input);
        break;
    }
    await todoInquirer();
  });
}

async function addToTodoList(input) {
  if (isNaN(input)) {
    return addTodo({ name: input, pokemonId: -1 });
  }
  pokemonClient.fetchPokemon(input).then((data) => {
    return addTodo({
      name: `catch ${data.name}`,
      pokemonId: data.id,
    });
  });
}
