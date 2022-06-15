// Define your endpoints here (this is your "controller file")
import express from "express";
import { getAllTodos } from "../controller/todos-controller.js";

const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);
todosRouter.post("/", () => {
  console.log("addTodo");
});

export default todosRouter;
