import "./App.css";
import { Routes, Route } from "react-router-dom";

import TodosList from "./components/TodosList";
import About from "./components/About";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<TodosList />}>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
