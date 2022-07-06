import React from "react";
import TodosList from "./TodosList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

export default function TodoApp() {
  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodosList />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
