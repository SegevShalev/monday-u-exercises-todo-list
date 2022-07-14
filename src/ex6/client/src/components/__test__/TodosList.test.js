import { render, screen } from "@testing-library/react";
import TodoList from "../TodosList";
import { Provider } from "react-redux";
import { store } from "../../store";

import * as fetchAllTodosModule from "../../actions/fetch-all-todos-action";

const items = [
  {
    id: 56,
    itemName: "Take dog out for a walk",
    status: false,
  },
  {
    id: 32,
    itemName: "Do the dishes",
    status: true,
  },
];

describe("ListContainer", () => {
  test("should render both items (one done and one not)", () => {
    render(
      <Provider store={store}>
        <TodoList
          todos={items}
          fetchAllTodosAction={jest.fn(() => items)}
          loading={false}
        />
      </Provider>
    );
    const linkedFirestTodo = screen.getByText("Take dog out for a walk");
    const linkedSecendTodo = screen.getByText("Do the dishes");
    expect(linkedFirestTodo).toBeInTheDocument();
    expect(linkedSecendTodo).toBeInTheDocument();
  });

  test("fetchItem mock", async () => {
    const fetchItemsMock = jest
      .spyOn(fetchAllTodosModule, "fetchAllTodosAction")
      .mockResolvedValue(items);

    render(
      <Provider store={store}>
        <TodoList
          todos={items}
          fetchAllTodosAction={fetchItemsMock}
          loading={false}
        />
      </Provider>
    );

    expect(fetchItemsMock).toHaveBeenCalled();
  });
});
