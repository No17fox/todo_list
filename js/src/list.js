let TodoItems = require("./todo_items.js");

class List {
  constructor(allTodo = new Map()) {
    this.allTodo = allTodo;
  }

  addATodo(content, isCompleted = false, isDeleted = false) {
    let newTodo = new TodoItems(content, isCompleted, isDeleted);
    this.allTodo.set(content, newTodo);
  }
}

module.exports = List;