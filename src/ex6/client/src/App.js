import { Routes, Route } from "react-router-dom";

import TodosListConnector from "./components/TodoListConnector";
import About from "./components/About";
import Menu from "./components/Menu";
import "./App.css";
function App(props) {
  return (
    <div style={{ height: "100%" }}>
      <Menu />
      <Routes>
        <Route path="/" element={<TodosListConnector />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
