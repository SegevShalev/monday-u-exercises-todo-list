import * as TodoService from "../services/item_manager.js";

async function getAllTodos(req, res) {
  const allTodos = await TodoService.getTodos();
  return res.status(200).json(allTodos);
}

async function addTodo(req, res) {}

export { getAllTodos };
