import ACTIONS from "../actions/constants/index";

const initialState = { loading: true };

const itemsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_TODOS_SUCCESS":
      return { todos: action.todos, loading: false };
    case "FETCH_ALL_TODOS_FAILURE":
      return { todos: null, loading: false };
    case "ADD_TODO":
      const { newItem } = action;
      const newTodos = [...state.todos, newItem.newTodo];
      return { todos: newTodos, loading: false };
    case "REMOVE_TODO":
      const { deletedTodo } = action.id;
      const filteredTodos = [...state.todos].filter((todo) => {
        if (todo.id !== deletedTodo) {
          return todo;
        }
      });
      return { todos: filteredTodos, loading: false };
    case "REMOVE_ALL_TODOS":
      return { todos: [], loading: false };
    case "CHANGE_TODO_STATUS":
      const updatedState = [...state.todos].map((todo) => {
        if (todo.id === action.updatedTodo.updatedTodoId) {
          todo.status = action.updatedTodo.newStatus;
        }
        return todo;
      });
      return { todos: updatedState, loading: false };
    default:
      return state;
  }
};

export default itemsEntitiesReducer;
