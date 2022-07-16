import ACTIONS from "./constants/index";
import { changeTodoStatus } from "../todos-client";

function changeTodoStatusRequest(updatedTodo) {
  return { type: ACTIONS.changeTodoStatus, updatedTodo };
}

export function changeTodoStatusAction(id, status) {
  return async (dispatch) => {
    try {
      const res = await changeTodoStatus(id, status);
      if (res.ok) {
        dispatch(changeTodoStatusRequest(await res.json()));
      }
    } catch {}
  };
}
