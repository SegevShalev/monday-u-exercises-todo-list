import ACTIONS from "./constants/index";
import { removeAllTodos } from "../todos-client";

function removeAllTodoRequest(id) {
  return { type: ACTIONS.removeAllTodos };
}

export function removeAllTodoAction(id) {
  return async (dispatch) => {
    try {
      const res = await removeAllTodos();
      if (res.ok) {
        dispatch(removeAllTodoRequest(await res.json()));
      }
    } catch {}
  };
}
