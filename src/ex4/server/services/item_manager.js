// The ItemManager should go here. Remember that you have to export it.
import { promises as fs } from "fs";
import { createWriteStream } from "fs";

let todosArray = [];
const TODOS_FILE = "todos.json";

export async function addTodo(data) {
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
export async function getTodos() {
  try {
    todosArray = await JSON.parse(await fs.readFile(TODOS_FILE));
    return [...todosArray];
  } catch {
    createWriteStream(TODOS_FILE);
    return [...todosArray];
  }
}

export async function deleteTodo(id) {
  let tempArray = await getTodos();
  const deletedTodo = tempArray[id].name;
  tempArray.splice(id, 1);
  try {
    writeToFile(tempArray);
    todosArray = [...tempArray];
    return deletedTodo;
  } catch (err) {
    console.log(err);
  }
}

async function writeToFile(newTodosArray) {
  await fs.writeFile(TODOS_FILE, JSON.stringify(newTodosArray, null, 2));
}
