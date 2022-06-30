const { Todo } = require("../db/models");

async function addTodo(data) {
  return await Todo.create({ itemName: data.name, status: false });
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

async function getTodoById(id) {
  return await Todo.findByPk(id);
}

async function updateStatus(id, status) {
  let date = new Date();
  if (!status) {
    date = null;
  }
  await Todo.update(
    { status: status, done: date },
    {
      where: {
        id: id,
      },
    }
  );
}

async function updateTodo(id, text) {
  await Todo.update(
    { itemName: text },
    {
      where: {
        id: id,
      },
    }
  );
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  deleteAll,
  getLength,
  getTodoById,
  updateStatus,
  updateTodo,
};
