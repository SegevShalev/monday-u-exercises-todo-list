import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Tab } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";

export default function Menu() {
  return (
    <div style={{ background: "black" }}>
      <Link to="/">
        <Tab>Todo App</Tab>
      </Link>{" "}
      |{" "}
      <Link to="/about">
        {" "}
        <Tab>About</Tab>
      </Link>
      <Outlet />
    </div>
  );
}
