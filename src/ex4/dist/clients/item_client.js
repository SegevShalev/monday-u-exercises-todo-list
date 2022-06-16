// import axios from "/axios";

export async function getTodos() {
  let fetchData = (await axios.get(`http://localhost:8080/api`)).data;
  return fetchData;
}

export async function addNewTodo(text) {
  await axios.post(`http://localhost:8080/api`, { name: text });
  return;
}
