import React, { useEffect } from "react";
import { Loader } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";

import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";
import styles from "../style/TodoList.module.css";

function TodoList(props) {
  const { fetchAllTodosAction } = props;

  useEffect(() => {
    fetchAllTodosAction();
  }, [fetchAllTodosAction]);

  const todosMap = props.filteredTodos
    ? [...props.filteredTodos]
    : [...props.todos];

  const displayTodos = props.loading ? (
    <Loader size={40} />
  ) : (
    todosMap.map((item) => {
      return (
        <TodoItem
          key={item.id}
          todoId={item.id}
          todoName={item.itemName}
          todoStatus={item.status}
        />
      );
    })
  );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo App</h1>
      <div>
        <div className={styles.todosBox}>
          <TodosHeader />
          <div className={"todoscontainer"}>{displayTodos}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
