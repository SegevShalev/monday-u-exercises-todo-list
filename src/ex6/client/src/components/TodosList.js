import React, { useState, useEffect, useCallback } from "react";

import { getTodos } from "../todos-client";
import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";
import Menu from "./Menu";
import styles from "../style/TodoList.module.css";

export default function TodoList(props) {
  const [todos, setTodos] = useState();

  const fetchTodos = useCallback(async () => {
    const todos = await getTodos();
    setTodos(todos);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  let displayTodos = "loading";
  if (todos) {
    displayTodos = todos.map((item) => {
      return (
        <TodoItem
          key={item.id}
          todoId={item.id}
          todoName={item.itemName}
          todoStatus={item.status}
          onItemChange={fetchTodos}
        />
      );
    });
  }

  return (
    <div
      style={{
        backgroundImage: "radial-gradient(#f3904f, #3b4371)",
        height: "100%",
      }}
    >
      <div>
        <Menu />
      </div>
      <h1 className={styles.title}>My Todo App</h1>
      <div>
        <div className={styles.container}>
          <TodosHeader onItemAdd={fetchTodos} />
          {displayTodos}
        </div>
      </div>
    </div>
  );
}
