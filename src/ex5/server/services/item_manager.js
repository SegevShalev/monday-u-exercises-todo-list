const { Todo } = require("../db/models");

async function addTodo(data) {
  return await Todo.create({ itemName: data.name });
}

async function getTodos() {
  const todos = await Todo.findAll();
  const todoArray = todos.map((item) => {
    return item.dataValues;
  });
  return todoArray;
}

async function deleteTodo(id) {
  return await Todo.destroy({
    where: {
      id: id,
    },
  });
}

async function deleteAll() {
  return await Todo.destroy({ where: {} });
}

async function getLength() {
  const todos = await getTodos();
  return todos.length;
}

module.exports = { getTodos, addTodo, deleteTodo, deleteAll, getLength };
