import ACTIONS from "./constants/index";

function unDeleteTodoRequest() {
  return { type: ACTIONS.undeleteTodos };
}
export function unDeleteTodoAction() {
  return (dispatch) => {
    dispatch(unDeleteTodoRequest());
  };
}
