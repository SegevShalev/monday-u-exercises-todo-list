// import Todo from "../db/models/todo.js";
const { promises } = require("fs");
const fs = promises;
const { createWriteStream } = require("fs");

let todosArray = [];
const TODOS_FILE = "todos.json";

async function addTodo(data) {
  let tempArray = await getTodos();
  try {
    tempArray.push(data);
    await writeToFile(tempArray);
    todosArray = [...tempArray];
    return data;
  } catch (err) {
    console.log(err);
  }
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

async function deleteTodo(id) {
  let tempArray = await getTodos();
  tempArray = tempArray.filter((todo) => {
    if (todo.id !== id) {
      return todo;
    }
  });
  try {
    writeToFile(tempArray);
    todosArray = [...tempArray];
    return;
  } catch (err) {
    console.log(err);
  }
}

async function deleteAll() {
  try {
    writeToFile([]);
    return;
  } catch (err) {
    console.log(err);
  }
}

async function getLength() {
  const todos = await getTodos();
  return todos.length;
}

async function writeToFile(newTodosArray) {
  await fs.writeFile(TODOS_FILE, JSON.stringify(newTodosArray, null, 2));
}

module.exports = { getTodos, addTodo, deleteTodo, deleteAll, getLength };
