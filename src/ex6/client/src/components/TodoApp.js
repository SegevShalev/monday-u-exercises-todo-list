import React from "react";
import TodosModal from "./TodosModal";

import Menu from "./Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

export default function TodoApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<TodosModal />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
