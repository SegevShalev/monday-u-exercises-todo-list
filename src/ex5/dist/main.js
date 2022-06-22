const userInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-todo-button");
const deleteAll = document.querySelector(".todo-button-delete-all");
const todoList = document.querySelector(".todo-list");
const loader = document.getElementById("load");

import {
  getTodos,
  addNewTodo,
  removeTodo,
  removeAllTodos,
} from "./clients/item_client.js";

class Main {
  constructor() {}
  async init() {
    addButton.addEventListener("click", () => addTodo(userInput));
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodo(userInput);
      }
    });
    deleteAll.addEventListener("click", () => deleteAllTodos());
    loader.classList.remove("off");
    await render();
    loader.classList.add("off");
  }
}

async function addTodo(input) {
  if (input.value.length === 0) {
    isInputValid(false);
    return;
  }
  isInputValid(true);
  loader.classList.remove("off");
  await addNewTodo(input.value);
  loader.classList.add("off");

  await render();
}

async function render() {
  loader.classList.remove("off");
  const todos = await getTodos();
  loader.classList.add("off");

  todoList.replaceChildren();

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    const newTodo = document.createElement("li");
    const deleteButton = document.createElement("button");

    newTodo.taskName = todo.itemName;
    newTodo.innerHTML = newTodo.taskName.substring(0, 20);
    if (newTodo.taskName.length > 20) {
      newTodo.innerHTML += "...";
    }
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    deleteButton.append(trashIcon);
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTodo(todo));

    newTodo.addEventListener("click", () => alert(newTodo.taskName));
    newTodo.classList.add("todo-item");
    todoItem.append(newTodo, deleteButton);

    todoList.append(todoItem);
  });
  userInput.value = "";
}

async function deleteTodo(todo) {
  console.log(todo);
  loader.classList.remove("off");
  await removeTodo(todo.id);
  loader.classList.add("off");
  await render();
}

async function deleteAllTodos() {
  loader.classList.remove("off");
  await removeAllTodos();
  loader.classList.add("off");
  await render();
}

function isInputValid(bool) {
  if (bool) {
    userInput.placeholder = "What on your mind?";
    userInput.classList.remove("red-placeholder");
    return;
  }
  userInput.placeholder = "Oh I wish i could do nothing too!";
  userInput.classList.add("red-placeholder");
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
  // you should create an `init` method in your class
  // the method should add the event listener to your "add" button
  main.init();
});
