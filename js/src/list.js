let TodoItems = require("./todo_items.js");

class List {
  constructor(allTodo = new Map()) {
    this.allTodo = allTodo;
    this.activeTodo = this.getActiveTodo();
  }

  addATodo(content, isCompleted = false, isDeleted = false) {
    let newTodo = new TodoItems(content, isCompleted, isDeleted);
    this.allTodo.set(content, newTodo);
  }

  getActiveTodo() {
    return new Map(
      [...this.allTodo].filter(([key, value]) => value.isCompleted === false)
    );
  }

  
}

module.exports = List;