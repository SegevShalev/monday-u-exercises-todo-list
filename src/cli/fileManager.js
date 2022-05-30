export default class FileManager {
  constructor() {
    this.todos = [];
  }
  addTodo(item) {
    this.todos.push(item);
  }

  removeTodo(item) {
    let temp = [...this.todos].filter((todo) => {
      if (item.id !== todo.id) {
        return todo;
      }
    });
    this.todos = temp;
  }
  removeAllTodos() {
    this.todos = [];
  }
}
