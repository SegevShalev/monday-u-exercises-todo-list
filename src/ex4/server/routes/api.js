// Define your endpoints here (this is your "controller file")
import express from "express";
import {
  getAllTodos,
  addTodo,
  deleteTodo,
} from "../controller/todos-controller.js";

const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);
todosRouter.post("/", addTodo);
todosRouter.delete("/", deleteTodo);

export default todosRouter;