const url = `http://localhost:8080/api`;
const header = { "Content-Type": "application/json" };

export async function getTodos() {
  let res = await fetch(url, {
    method: "GET",
    headers: header,
  });

  if (!res.ok) {
    return { name: "Failed to get Todos" };
  }
  return await res.json();
}

export async function addTodo(text) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ name: text }),
    headers: header,
  });
}

export async function removeTodo(id) {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: header,
  });
}

export async function removeAllTodos() {
  await fetch(`${url}`, {
    method: "DELETE",
    headers: header,
  });
}

export async function changeTodoStatus(id, status) {
  await fetch(`${url}/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status: status }),
    headers: header,
  });
}

export async function updateTodoInput(id, text) {
  await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ text: text }),
    headers: header,
  });
}
