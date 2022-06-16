// Define your endpoints here (this is your "controller file")
import express from "express";
import {
  getAllTodos,
  addTodo,
  deleteTodo,
} from "../controller/todos-controller.js";

import { logger } from "../middlewares/middlewareDemo.js";

const todosRouter = express.Router();

todosRouter.get("/", logger, getAllTodos);
todosRouter.post("/", logger, addTodo);
todosRouter.delete("/:id", logger, deleteTodo);

export default todosRouter;
