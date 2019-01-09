'use strict';

let List = require("../src/list.js");

describe("List", () => {
  it("should have a method to add new todo", () => {
    let list = new List();
    list.addATodo("站会", true);
    expect(list.allTodo.get("站会")).toEqual({
      content: "站会", 
      isCompleted: true, 
      isDeleted: false
    });
  });
})

