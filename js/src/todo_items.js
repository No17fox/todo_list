class TodoItems {
  constructor(content, isCompleted = false, isDeleted = false) {
    this.content = content;
    this.isCompleted = isCompleted;
    this.isDeleted = isDeleted;
  }
}

module.exports = TodoItems;