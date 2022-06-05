import { promises as fs } from "fs";
import { createWriteStream } from "fs";
import {
  printBgGreenUl,
  printInverseBold,
  printBgRedDeleted,
} from "./chalkUtils.js";

let arrayBuffer = [];
const todosFile = "todos.json";

export async function addTodo(data) {
  let tempArray = await getTodosHandler();
  try {
    tempArray.push(data);
    writeToFile(tempArray);
    arrayBuffer = [...tempArray];
    printBgGreenUl("new todo added!");
  } catch (err) {
    console.log(err);
  }
}

async function writeToFile(newTodosArray) {
  await fs.writeFile("todos.json", JSON.stringify(newTodosArray, null, 2));
}

async function getTodosHandler() {
  try {
    arrayBuffer = await JSON.parse(await fs.readFile(todosFile));
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
      if (todo.id > id) {
        /* re-assign id */
        todo.id--;
      }
      return todo;
    } else {
      printBgRedDeleted(todo.name);
    }
  });
  try {
    writeToFile(tempArray);
    arrayBuffer = [...tempArray];
  } catch (err) {
    console.log(err);
  }
}
