import itemsEntitiesReducer from "../items-entities-reducer";
import ACTIONS from "../../actions/constants/index";

describe("itemsEntitiesReducer test", () => {
  const initialState = { todos: [], loading: true, oldTodos: [] };
  let action;

  test("should return the initial state", () => {
    expect(itemsEntitiesReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  test("should returned the fetch items", () => {
    action = {
      type: ACTIONS.fetchAllTodosSuccess,
      todos: [
        { text: "do homework", status: false, id: 1 },
        { text: "catch pikachu", status: true, id: 2 },
      ],
    };
    expect(itemsEntitiesReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.todos,
      loading: false,
      oldTodos: action.todos,
    });
  });

  test("should handle a todo being added to an empty list", () => {
    const previousState = { ...initialState };
    action = {
      type: ACTIONS.addTodo,
      newItem: { newTodo: { text: "Run the tests", status: false, id: 1 } },
    };
    const { newItem } = action;
    const newTodos = [...previousState.todos, newItem.newTodo];
    expect(itemsEntitiesReducer(previousState, action)).toEqual({
      ...previousState,
      todos: newTodos,
      oldTodos: newTodos,
    });
  });
});
