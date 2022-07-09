import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Loader } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";

import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";
import Menu from "./Menu";
import styles from "../style/TodoList.module.css";
import fetchAllTodosAction from "../actions/fetch-all-todos-action";

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
      <Menu />
      <h1 className={styles.title}>My Todo App</h1>
      <div>
        <div className={styles.todosBox}>
          <TodosHeader />
          {displayTodos}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ itemsEntities, itemsView }) {
  return {
    todos: itemsEntities.todos,
    filteredTodos: itemsView.filteredTodos,
    loading: itemsEntities.loading,
  };
}

const mapDispatchToProps = {
  fetchAllTodosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
