import * as TodoService from "../services/item_manager.js";

async function getAllTodos(req, res) {
  const allTodos = await TodoService.getTodos();
  return res.status(200).json(allTodos);
}

async function addTodo(req, res) {
  const newTodo = { name: req.body.name, pokemonId: req.body.pokemonId };
  await TodoService.addTodo(newTodo);
  return res.status(200).json("added: " + req.body.name);
}

async function deleteTodo(req, res) {
  console.log(req.body);
  await TodoService.deleteTodo(req.body.id);
  return res.status(204).json("deleted");
}

async function addToTodoList(input) {
  if (isNaN(input)) {
    return addTodo({ name: input, pokemonId: -1 });
  }
  pokemonClient.fetchPokemon(input).then((data) => {
    return addTodo({
      name: `catch ${data.name}`,
      pokemonId: data.id,
    });
  });
}

export { getAllTodos, addTodo, deleteTodo };
