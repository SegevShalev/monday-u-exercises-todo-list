const input = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

addButton.addEventListener("click", () => addTodo(input));
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo(input.value);
  }
});

function addTodo(input) {
  if (input.value.length === 0) {
    changeInputPlaceholder(false);
    return;
  }
  changeInputPlaceholder(true);
  const todoItem = document.createElement("div");
  const newTodo = document.createElement("li");
  newTodo.innerHTML = input.value;
  input.value = "";
  todoItem.append(newTodo);
  todoList.append(todoItem);
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
