const input = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

class Main {
  init() {
    addButton.addEventListener("click", () => addTodo(input));
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodo(input);
      }
    });
  }
}

function addTodo(input) {
  if (input.value.length === 0) {
    changeInputPlaceholder(false);
    return;
  }
  changeInputPlaceholder(true);
  const todoItem = document.createElement("div");
  const newTodo = document.createElement("li");
  const deleteButton = document.createElement("button");
  const trashIcon = document.createElement("i");

  newTodo.taskName = input.value;
  newTodo.innerHTML = newTodo.taskName.substring(0, 20);
  if (newTodo.taskName.length > 20) {
    newTodo.innerHTML += "...";
  }

  trashIcon.classList.add("fas", "fa-trash");
  deleteButton.append(trashIcon);
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => deleteTodo(todoItem));

  newTodo.addEventListener("click", () => alert(newTodo.taskName));
  newTodo.classList.add("todo-item");

  todoItem.append(newTodo, deleteButton);
  todoList.append(todoItem);

  input.value = "";
}

function deleteTodo(todo) {
  todo.remove();
}

function changeInputPlaceholder(bool) {
  if (bool) {
    input.placeholder = "What on your mind?";
    input.classList.remove("red-placeholder");
    return;
  }
  input.placeholder = "Oh I wish i could do nothing too!";
  input.classList.add("red-placeholder");
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
  // you should create an `init` method in your class
  // the method should add the event listener to your "add" button
  main.init();
});
