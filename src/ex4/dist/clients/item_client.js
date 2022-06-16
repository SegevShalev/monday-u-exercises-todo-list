// import axios from "/axios";
const url = `http://localhost:8080/api`;

export async function getTodos() {
  let fetchData = (await axios.get(url)).data;
  return fetchData;
}

export async function addNewTodo(text) {
  await axios.post(url, { name: text });
  return;
}

export async function removeTodo(id) {
  await axios.delete(`${url}/${id}`, { name: text });
  return;
}

// export async function removeTodo(id) {
//   try {
//     await fetch(`${url}/${id}`, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch {}
// }
