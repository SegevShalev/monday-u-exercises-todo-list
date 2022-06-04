import { promises as fs } from "fs";
import { createWriteStream } from "fs";
import Chalk from "chalk";

const printBgGreenUl = (input) =>
  console.log(`${Chalk.bgGreen.underline(input)}`);
const printInverseBold = (input) => console.log(`${Chalk.inverse.bold(input)}`);
const printBgRed = (input) => console.log(`${Chalk.red.strikethrough(input)}`);

let arrayBuffer = [];

export async function addTodo(data) {
  let tempArray = await getTodosHandler();
  try {
    tempArray.push(data);
    await fs.writeFile("todos.json", JSON.stringify(tempArray));
    arrayBuffer = [...tempArray];
    printBgGreenUl("new todo added!");
  } catch (err) {
    console.log(err);
  }
}

async function getTodosHandler() {
  try {
    arrayBuffer = await JSON.parse(await fs.readFile("todos.json"));
    return [...arrayBuffer];
  } catch {
    createWriteStream("todos.json");
    return [...arrayBuffer];
  }
}

export async function getAllTodos() {
  const allTodos = await getTodosHandler();
  allTodos.forEach((todo) => {
    printInverseBold(todo.name);
  });
}

export async function getId() {
  let tempArray = await getTodosHandler();
  return [...tempArray].length;
}

export async function deleteTodo(id) {
  let tempArray = await getTodosHandler();
  tempArray = [...tempArray].filter((todo) => {
    if (id != todo.id) {
      return todo;
    } else {
      printBgRed(todo.name);
    }
  });
  // tempArray = [...tempArray].slice(id, 1);
  try {
    await fs.writeFile("todos.json", JSON.stringify(tempArray));
    arrayBuffer = [...tempArray];
  } catch (err) {
    console.log(err);
  }
}
