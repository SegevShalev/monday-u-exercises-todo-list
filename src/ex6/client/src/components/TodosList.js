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

  const todosMap = props.todos ? (
    props.todos.map((item) => {
      return (
        <TodoItem
          key={item.id}
          todoId={item.id}
          todoName={item.itemName}
          todoStatus={item.status}
        />
      );
    })
  ) : (
    <Loader size={40} />
  );

  return (
    <div className={styles.container}>
      <Menu />
      <h1 className={styles.title}>My Todo App</h1>
      <div>
        <div className={styles.todosBox}>
          <TodosHeader />
          {todosMap}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ itemsEntities }) {
  return {
    loading: itemsEntities.loading,
    todos: itemsEntities.todos,
  };
}

const mapDispatchToProps = {
  fetchAllTodosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
