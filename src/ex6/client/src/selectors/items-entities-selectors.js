export const getItemsEntities = (state) => state.itemsEntities;

export const getUndoneTodos = (todos) => {
  const filteredTodos = todos.filter((todo) => {
    if (todo.status === false) {
      return todo;
    }
  });
  return filteredTodos;
};

export const getSearchedTodos = (todos, text) => {
  if (text === "") {
    return null;
  }
  const filteredTodos = todos.filter((todo) => {
    if (todo.itemName.toLowerCase().includes(text.toLowerCase())) {
      return todo;
    }
  });
  return filteredTodos;
};
