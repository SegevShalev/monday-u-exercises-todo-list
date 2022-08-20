import React from "react";
import { Outlet } from "react-router-dom";
import { Tab } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const TODOAPP = "Todo App";
  const ABOUT = "About";
  return (
    <div style={{ background: "black" }}>
      <Tab key={TODOAPP} onClick={() => navigate("/")}>
        {TODOAPP}
      </Tab>
      |
      <Tab key={ABOUT} onClick={() => navigate("/about")}>
        {ABOUT}
      </Tab>
      <Outlet />
    </div>
  );
}
