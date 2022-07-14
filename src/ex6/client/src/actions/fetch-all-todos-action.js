import ACTIONS from "./constants/index";
import { getTodos } from "../todos-client";

function fetchAllTodosSuccess(todos) {
  return {
    type: ACTIONS.fetchAllTodosSuccess,
    todos: todos,
  };
}
function fetchAllTodosFailure() {
  return {
    type: ACTIONS.fetchAllTodosFailure,
  };
}

export function fetchAllTodosAction() {
  return async (dispatch, state) => {
    try {
      const todos = await getTodos();
      dispatch(fetchAllTodosSuccess(todos));
    } catch {
      dispatch(fetchAllTodosFailure());
    }
  };
}
