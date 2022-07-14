import React, { useState } from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../store";

import TodoItem from "../TodoItem";

test("render the ListItem", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <TodoItem todoName={"Test"} todoStatus={true} todoId={2} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//bonus #2
test("render the ListItem with props variation", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <TodoItem todoName={"another test"} todoStatus={false} todoId={135} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
