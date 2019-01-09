class TodoItems {
  constructor(content, isCompleted = false) {
    this.content = content;
    this.isCompleted = isCompleted;
  }
}

module.exports = TodoItems;