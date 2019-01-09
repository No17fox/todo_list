'use strict';

let TodoItems = require("../src/todo_items.js");

describe("TodoItems", () => {
  it("should have attributes named content, isCompleted, and isDeleted", () => {
    let todoItems = new TodoItems("站会");
    expect(todoItems.content).toEqual("站会");
    expect(todoItems.isCompleted).toEqual(false);
  });

  it("should have attributes named content, isCompleted, and isDeleted", () => {
    let todoItems = new TodoItems("站会", true);
    expect(todoItems.content).toEqual("站会");
    expect(todoItems.isCompleted).toEqual(true);
  });
});