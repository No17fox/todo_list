'use strict';

// let updateLocalStorage = require("./storage.js");

let status = "all";

function addTodo(event) {
  let input = document.getElementById("input").value;
  if (event.keyCode === 13 && input) {
    let currentList = updateLocalStorage("add", input);
    document.getElementById("input").value = "";
  }
}