import * as TodoService from "../services/item_manager.js";
import { fetchPokemon } from "../clients/pokemon_client.js";

async function getAllTodos(req, res) {
  const allTodos = await TodoService.getTodos();
  return res.status(200).json(allTodos);
}

async function addTodo(req, res) {
  console.log("req.body");
  // const newTodo = { name: req.body.name, pokemonId: req.body.pokemonId };
  // await TodoService.addTodo(newTodo);
  if (isNaN(req.body.name)) {
    const newTodo = await TodoService.addTodo({
      name: req.body.name,
      pokemonId: -1,
    });
    return res.status(201).json({ newTodo });
  }
  const pokemon = await fetchPokemon(req.body.name);
  const newTodo = await TodoService.addTodo({
    //test!*
    name: pokemon.name,
    pokemonId: req.body.name,
  });
  return res.status(201).json({ newTodo });
}

async function deleteTodo(req, res) {
  const deletedTodo = await TodoService.deleteTodo(req.body.id);
  return res.status(200).json("deleted: " + deletedTodo);
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
