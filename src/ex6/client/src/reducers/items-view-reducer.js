import {
  getUndoneTodos,
  getSearchedTodos,
} from "../selectors/items-entities-selectors";

const initialState = { filteredTodos: null };

const itemsViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_UNDONE_TODOS":
      let statusfiltered = getUndoneTodos(action.todos);
      if (state.filteredTodos !== null) {
        statusfiltered = null;
      }
      return { ...state, filteredTodos: statusfiltered };
    case "FILTER_SEARCH_TODOS":
      const searchFilter = getSearchedTodos(action.todos, action.text);
      return { ...state, filteredTodos: searchFilter };
    default:
      return state;
  }
};
export default itemsViewReducer;
