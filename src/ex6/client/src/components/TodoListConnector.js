import { connect } from "react-redux";
import { fetchAllTodosAction } from "../actions/fetch-all-todos-action";
import TodoList from "./TodosList";

function mapStateToProps({ itemsEntities, itemsView }) {
  return {
    todos: itemsEntities.todos || [],
    filteredTodos: itemsView.filteredTodos || null,
    loading: itemsEntities.loading,
  };
}

const mapDispatchToProps = {
  fetchAllTodosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
