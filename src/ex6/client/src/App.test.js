import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/My Todo App/i);
  expect(linkElement).toBeInTheDocument();
});

/* describe("test", () => {
  let a;
  let b;

  beforeEach(() => {
    a = 2;
    b = 1;
  });
  it("adding", () => {
    expect(a + b).toBe(3);
  });
  it("multiple", () => {
    expect(a * b).toBe(2);
  });
}); */
