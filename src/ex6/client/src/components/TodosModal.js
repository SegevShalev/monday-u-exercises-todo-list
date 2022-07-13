import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import { getTodos } from "../todos-client";
import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";

export default function RegistarModal(props) {
  Modal.setAppElement("#portal");

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
    <div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 30,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient( #f3904f, #3b4371)",
          },
          content: {
            background: "white",
            position: "absolute",
            top: "100px",
            left: "500px",
            right: "500px",
            bottom: "100px",
            border: "1px solid #ccc",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            overflow: "auto",
          },
        }}
        isOpen={true}
      >
        <TodosHeader onItemAdd={fetchTodos} />
        {displayTodos}
      </Modal>
    </div>
  );
}
