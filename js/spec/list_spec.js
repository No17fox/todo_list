'use strict';

let List = require("../src/list.js");
let TodoItems = require("../src/todo_items.js");

let list = new List();

describe("List", () => {
  it("should have a method to add new todo", () => {
    list.addATodo("站会", true);

    expect(list.allTodo.get("站会")).toEqual({
      content: "站会", 
      isCompleted: true
    });
  });

  it("should have a method to find active todo", () => {
    list.addATodo("Code review", false);

    let newTodo = new TodoItems("Code review", false);
    let result = new Map();
    result.set(newTodo.content, newTodo);

    expect(list.getActiveTodo()).toEqual(result);
  });

  it("should have a method to find completed todo", () => {
    let newTodo = new TodoItems("站会", true);
    let result = new Map();
    result.set(newTodo.content, newTodo);
    
    expect(list.getCompletedTodo()).toEqual(result);
  });

  it("should have a method to count active todo", () => {
    expect(list.countLeftItems()).toEqual(1);
  });

  it("should have a method to change todo's status", () => {
    list.completedATodo("Code review");

    let newTodo = new TodoItems("Code review", true);
    let result = new Map();
    result.set(newTodo.content, newTodo);

    expect(list.getActiveTodo()).toEqual(result);
  });

  it("should have a method to delete a todo", () => {
    list.deleteATodo("站会");

    let newTodo = new TodoItems("Code review", true);
    let result = new Map();
    result.set(newTodo.content, newTodo);

    expect(list.allTodo).toEqual(result);
  });
});

