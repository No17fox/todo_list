let TodoItems = require("./todo_items.js");

class List {
  constructor(allTodo = new Map()) {
    this.allTodo = allTodo;
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

  getCompletedTodo() {
    return new Map(
      [...this.allTodo].filter(([key, value]) => value.isCompleted === true)
    );
  }

  countLeftItems() {
    return this.getActiveTodo().size;
  }

  completedATodo(key) {
    let currentTodo = this.allTodo.get(key);
    currentTodo.isCompleted = true;
    this.allTodo.set(key, currentTodo);
  }

  deleteATodo(key) {
    this.allTodo.delete(key);
  }
  
}

module.exports = List;