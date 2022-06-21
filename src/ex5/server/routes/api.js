// Define your endpoints here (this is your "controller file")
const express = require("express");
const {
  getAllTodos,
  addTodo,
  deleteTodo,
  deleteAllTodos,
} = require("../controller/todos-controller.js");

const { logger } = require("../middlewares/middlewareDemo.js");

const todosRouter = express.Router();

todosRouter.get("/", logger, getAllTodos);
todosRouter.post("/", logger, addTodo);
todosRouter.delete("/:id", logger, deleteTodo);
todosRouter.delete("/", logger, deleteAllTodos);

module.exports = todosRouter;
