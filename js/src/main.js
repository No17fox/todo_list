'use strict';

let status = "all";

window.onload = function () {
  let listNode = document.getElementById("list");
  listNode.innerHTML = "";
  createLocalStorage();
  let currentList = readLocalStorage();
  for (let item of currentList.allTodo.keys()) {
    showList(currentList, listNode, item);
  }
}

function addTodo(event) {
  let input = document.getElementById("input").value;
  if (event.keyCode === 13 && input) {
    let currentList = updateLocalStorage("add", input);
    document.getElementById("input").value = "";
    if (status != "completed") {
      let listNode = document.getElementById("list");
      showList(currentList, listNode, input);
    }
  }
}

function completeTodo(event) {
  let todoContent = event.target;
  let todoItems = todoContent.parentNode;
  let listNode = todoItems.parentNode;

  todoItems.classList.add("completed");
  todoContent.classList.add("completed");
  if (status === "active") {
    listNode.removeChild(todoItems);
  }
  let currentList = updateLocalStorage("complete", todoContent.innerHTML);
}

function deleteTodo(event) {
  let todoItems = event.target.parentNode;
  let todoContent = todoItems.firstChild;
  let listNode = todoItems.parentNode;

  listNode.removeChild(todoItems);
  let currentList = updateLocalStorage("delete", todoContent.innerHTML);
}

function showList(currentList, listNode, input) {
  let todoItems = document.createElement("li");
  let todoContent = document.createElement("div");
  let deleteBtn = document.createElement("div");

  todoContent.innerHTML = input;
  todoContent.classList.add("todo_content");
  if (currentList.allTodo.get(input).isCompleted) {
    todoItems.classList.add("completed");
    todoContent.classList.add("completed");
  }

  deleteBtn.innerHTML = "DELETE";
  deleteBtn.classList.add("delete_btn");

  listNode.appendChild(todoItems);
  todoItems.appendChild(todoContent);
  todoItems.appendChild(deleteBtn);

  todoContent.addEventListener("click", completeTodo);

  deleteBtn.addEventListener("click", deleteTodo);
}