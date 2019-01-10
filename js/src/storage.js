'use strict';

// let List = require("../src/list.js");

function mapToJson(map) {
  return JSON.stringify([...map]);
}

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

function createLocalStorage() {
  if (!localStorage.todoList) {
    localStorage.setItem("todoList", mapToJson(new Map()));
  }
}

function readLocalStorage() {
  let alltodo = jsonToMap(localStorage.getItem("todoList"));
  return new List(alltodo);
}

function updateLocalStorage(operation, list, key = "") {
  switch (operation) {
    case "add":
      list.addATodo(key);
      localStorage.setItem("todoList", mapToJson(list.allTodo));
      return list;

    case "complete":
      list.completedATodo(key);
      localStorage.setItem("todoList", mapToJson(list.allTodo));
      return list;

    case "delete":
      list.deleteATodo(key);
      localStorage.setItem("todoList", mapToJson(list.allTodo));
      return list;

    default:
      break;
  }
}

// module.exports = updateLocalStorage;