const url = `http://localhost:8080/api`;

export async function getTodos() {
  let res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return { name: "Failed to get Todos" };
  }
  return await res.json();
}

export async function addNewTodo(text) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ name: text }),
    headers: { "Content-Type": "application/json" },
  });
}

export async function removeTodo(id) {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export async function removeAllTodos() {
  await fetch(`${url}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
