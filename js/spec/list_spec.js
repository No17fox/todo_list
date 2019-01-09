'use strict';

let List = require("../src/list.js");
let TodoItems = require("../src/todo_items.js");

let list = new List();

describe("List", () => {
  it("should have a method to add new todo", () => {
    list.addATodo("站会", true);

    expect(list.allTodo.get("站会")).toEqual({
      content: "站会", 
      isCompleted: true, 
      isDeleted: false
    });
  });

  it("should have a method to find active todo", () => {
    list.addATodo("Code review", false);

    let newTodo = new TodoItems("Code review", false);
    let result = new Map();
    result.set(newTodo.content, newTodo);
    
    expect(list.activeTodo).toEqual(result);
  })
})
