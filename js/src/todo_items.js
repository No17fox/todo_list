class TodoItems {
  constructor(content, isCompleted = false, isDeleted = false) {
    this.content = content;
    this.isCompleted = isCompleted;
    this.isDeleted = isDeleted;
  }

  completeATodo() {
    this.isCompleted = true;
  }

  deletedATodo() {
    this.isDeleted = true;
  }
}

module.exports = TodoItems;