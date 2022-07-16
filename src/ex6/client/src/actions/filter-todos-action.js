import ACTIONS from "./constants/index";

function filterUndoneTodosRequest(todos) {
  return { type: ACTIONS.filterUndoneTodos, todos };
}

function filterBySearchRequest(todos, text) {
  return { type: ACTIONS.filterSearchTodos, todos, text };
}

export function filterTodosAction(filterType, todos, text) {
  return (dispatch) => {
    if (filterType === "UNDONE") {
      dispatch(filterUndoneTodosRequest(todos));
    } else {
      dispatch(filterBySearchRequest(todos, text));
    }
  };
}
