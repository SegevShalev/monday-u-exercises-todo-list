import { promises as fs } from "fs";
import { createWriteStream } from "fs";

let arrayBuffer = [];

export async function addTodo(data) {
  let tempArray = await getAllTodos();
  try {
    tempArray.push(data);
    await fs.writeFile("todos.json", JSON.stringify(tempArray));
    arrayBuffer = [...tempArray];
    console.log("new todo added!");
  } catch (err) {
    console.log(err);
  }
}

export async function getAllTodos() {
  try {
    arrayBuffer = await JSON.parse(await fs.readFile("todos.json"));
    return [...arrayBuffer];
  } catch {
    createWriteStream("todos.json");
    return [...arrayBuffer];
  }
}

export async function getId() {
  let tempArray = await getAllTodos();
  return [...tempArray].length;
}

export async function deleteTodo(id) {
  let tempArray = await getAllTodos();
  tempArray = [...tempArray].filter((todo) => {
    if (id != todo.id) {
      return todo;
    }
  });
  try {
    await fs.writeFile("todos.json", JSON.stringify(tempArray));
    arrayBuffer = [...tempArray];
  } catch (err) {
    console.log(err);
  }
}
