import { promises as fs } from "fs";
import { createWriteStream } from "fs";
import {
  printBgGreenUl,
  printInverseBold,
  printBgRedDeleted,
} from "./chalkUtils.js";

let todosArray = [];
const TODOS_FILE = "todos.json";

export async function addTodo(data) {
  let tempArray = await getTodos();
  try {
    tempArray.push(data);
    writeToFile(tempArray);
    todosArray = [...tempArray];
    printBgGreenUl("new todo added!");
  } catch (err) {
    console.log(err);
  }
}

async function writeToFile(newTodosArray) {
  await fs.writeFile(TODOS_FILE, JSON.stringify(newTodosArray, null, 2));
}

/* return all the todos or create a file if not found one. */
async function getTodos() {
  try {
    todosArray = await JSON.parse(await fs.readFile(TODOS_FILE));
    return [...todosArray];
  } catch {
    createWriteStream(TODOS_FILE);
    return [...todosArray];
  }
}

export async function printAllTodos() {
  const allTodos = await getTodos();
  allTodos.forEach((todo) => {
    printInverseBold(todo.name);
  });
}

export async function deleteTodo(id) {
  let tempArray = await getTodos();
  const deletedTodo = tempArray[id].name;
  tempArray.splice(id, 1);
  try {
    writeToFile(tempArray);
    printBgRedDeleted(deletedTodo);
    todosArray = [...tempArray];
  } catch (err) {
    console.log(err);
  }
}
