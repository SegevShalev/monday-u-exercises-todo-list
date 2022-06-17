const url = `http://localhost:8080/api`;

export async function getTodos() {
  let fetchData = (await axios.get(url)).data;
  return fetchData;
}

export async function addNewTodo(text) {
  const res = await fetch(url, {
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
