import ACTIONS from "./constants/index";
import { removeTodo } from "../todos-client";

function removeTodoRequest(id) {
  return { type: ACTIONS.removeTodo, id };
}

export function removeTodoAction(id) {
  return async (dispatch) => {
    try {
      const res = await removeTodo(id);
      if (res.ok) {
        dispatch(removeTodoRequest(await res.json()));
      }
    } catch {}
  };
}
