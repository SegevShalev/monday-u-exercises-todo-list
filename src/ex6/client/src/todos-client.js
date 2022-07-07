const url = `http://localhost:8080/api`;
const HEADER = { "Content-Type": "application/json" };

export async function getTodos() {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: HEADER,
    });

    if (!res.ok) {
      return { name: "Failed to get Todos" };
    }
    return await res.json();
  } catch {
    return null;
  }
}

export async function addTodo(text) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify({ name: text }),
    headers: HEADER,
  });
}

export async function removeTodo(id) {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: HEADER,
  });
}

export async function removeAllTodos() {
  await fetch(`${url}`, {
    method: "DELETE",
    headers: HEADER,
  });
}

export async function changeTodoStatus(id, status) {
  await fetch(`${url}/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status: status }),
    headers: HEADER,
  });
}

export async function updateTodoInput(id, text) {
  await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ text: text }),
    headers: HEADER,
  });
}
