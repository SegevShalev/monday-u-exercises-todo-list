const TodoService = require("../services/item_manager.js");
const { fetchPokemon } = require("../clients/pokemon_client.js");
const NONE_POKEMON_TODO = -1;

async function getAllTodos(req, res) {
  const allTodos = await TodoService.getTodos();
  return res.status(200).json(allTodos);
}

async function addTodo(req, res) {
  const length = await TodoService.getLength();
  if (isNaN(req.body.name)) {
    const newTodo = await TodoService.addTodo({
      id: req.body.name + length,
      name: req.body.name,
      pokemonId: NONE_POKEMON_TODO,
    });
    return res.status(201).json({ newTodo });
  }
  const pokemon = await fetchPokemon(req.body.name);
  const newTodo = await TodoService.addTodo({
    id: pokemon.name + length,
    name: `catch ${pokemon.name}`,
    pokemonId: req.body.name,
  });
  return res.status(201).json({ newTodo });
}

async function deleteTodo(req, res) {
  const deletedTodo = await TodoService.deleteTodo(req.params.id);
  return res.status(200).json({ deletedTodo: parseInt(req.params.id) });
}

async function deleteAllTodos(req, res) {
  await TodoService.deleteAll();
  return res.status(201).json("everything deleted");
}

async function updateStatus(req, res) {
  const updatedStatusTodo = await TodoService.updateStatus(
    req.params.id,
    req.body.status
  );
  return res.status(200).json({
    updatedTodoId: parseInt(req.params.id),
    newStatus: req.body.status,
  });
}

async function updateTodo(req, res) {
  const todo = await TodoService.updateTodo(req.params.id, req.body.text);
  return res.status(200).json("200");
}

module.exports = {
  getAllTodos,
  addTodo,
  deleteTodo,
  deleteAllTodos,
  updateStatus,
  updateTodo,
};
