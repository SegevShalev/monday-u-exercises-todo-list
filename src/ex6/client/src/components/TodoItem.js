import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeTodoAction } from "../actions/remove-todo-action";
import { changeTodoStatusAction } from "../actions/change-todo-status-action";
// eslint-disable-next-line
import { MdOutlineModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import { changeTodoStatus } from "../todos-client";
import { MAX_TEXT_LENGTH } from "../constants";
import styles from "../style/TodosItem.module.css";
function TodoItem({
  todoName = "no name was found",
  todoStatus,
  todoId,
  removeTodoAction,
  changeTodoStatusAction,
}) {
  const deleteTodo = async () => {
    // await removeTodo(todoId);
    removeTodoAction(todoId);
  };
  const changeStatus = async () => {
    // await changeTodoStatus(todoId, !status);
    changeTodoStatusAction(todoId, !todoStatus);
  };

  let itemName =
    todoName.length > MAX_TEXT_LENGTH
      ? todoName.substring(0, MAX_TEXT_LENGTH)
      : todoName;
  return (
    <div className={styles.todoRow}>
      <input
        onClick={changeStatus}
        type="checkbox"
        className={styles.checkbox}
        checked={todoStatus}
        onChange={() => {}}
        // onChange={() => setStatus(!status)}
      />
      <div className={styles.itemName}>
        <label>{itemName}</label>
      </div>
      <div>
        <button onClick={deleteTodo}>
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string,
  todoId: PropTypes.number,
  todoStatus: PropTypes.bool,
  onItemChange: PropTypes.func,
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  removeTodoAction,
  changeTodoStatusAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
