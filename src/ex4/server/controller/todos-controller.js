import * as TodoService from "../services/item_manager.js";
import { fetchPokemon } from "../clients/pokemon_client.js";

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
      pokemonId: -1,
    });
    return res.status(201).json({ newTodo });
  }
  const pokemon = await fetchPokemon(req.body.name);
  const newTodo = await TodoService.addTodo({
    id: pokemon.name + length,
    name: pokemon.name,
    pokemonId: req.body.name,
  });
  return res.status(201).json({ newTodo });
}

async function deleteTodo(req, res) {
  console.log(req.params, "req");
  const deletedTodo = await TodoService.deleteTodo(req.body.id);
  return res.status(200).json("deleted: " + deletedTodo);
}

export { getAllTodos, addTodo, deleteTodo };
