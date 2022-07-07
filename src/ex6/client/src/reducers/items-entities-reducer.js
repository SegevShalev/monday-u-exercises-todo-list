import ACTIONS from "../actions/constants/index";

const initialState = { loading: true };

const itemsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.addTodo:
      const { newItem } = action;
      const newTodos = [...state.todos, newItem.newTodo];
      return { todos: newTodos, loading: false };
    case "FETCH_ALL_TODOS_SUCCESS":
      return { todos: action.todos, loading: false };
    case "FETCH_ALL_TODOS_FAILURE":
      return { todos: null, loading: false };
    default:
      return state;
  }
};

export default itemsEntitiesReducer;
