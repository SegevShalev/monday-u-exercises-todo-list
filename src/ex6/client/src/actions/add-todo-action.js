import ACTIONS from "./constants/index";
import { addTodo } from "../todos-client";

function addTodoRequest(newItem) {
  return { type: ACTIONS.addTodo, newItem };
}
export function addTodoAction(value) {
  return async (dispatch) => {
    try {
      const res = await addTodo(value);
      if (res.ok) {
        dispatch(addTodoRequest(await res.json()));
      }
    } catch {}
  };
}
