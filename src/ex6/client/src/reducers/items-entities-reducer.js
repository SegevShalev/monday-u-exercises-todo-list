import ACTIONS from "../actions/constants/index";

const initialState = { todos: [], loading: true, oldTodos: [] };

const itemsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.todos,
        loading: false,
        oldTodos: action.todos,
      };
    case "FETCH_ALL_TODOS_FAILURE":
      return {
        ...state,
        todos: null,
        loading: false,
        oldTodos: [...state.todos],
      };
    case "ADD_TODO":
      const { newItem } = action;
      const newTodos = [...state.todos, newItem.newTodo];
      return { ...state, todos: newTodos, oldTodos: newTodos };
    case "REMOVE_TODO":
      const { deletedTodo } = action.id;
      const filteredTodos = [...state.todos].filter((todo) => {
        if (todo.id !== deletedTodo) {
          return todo;
        }
      });
      return { ...state, todos: filteredTodos, oldTodos: [...state.todos] };
    case "REMOVE_ALL_TODOS":
      return { ...state, todos: [], oldTodos: [] };
    case "CHANGE_TODO_STATUS":
      const updatedState = [...state.todos].map((todo) => {
        if (todo.id === action.updatedTodo.updatedTodoId) {
          todo.status = action.updatedTodo.newStatus;
        }
        return todo;
      });
      return { ...state, todos: updatedState, oldTodos: updatedState };
    case "UNDELETE_TODOS":
      return {
        ...state,
        todos: [...state.oldTodos],
        oldTodos: [...state.oldTodos],
      };
    default:
      return state;
  }
};

export default itemsEntitiesReducer;
