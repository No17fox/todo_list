let status = "all";

window.onload = function () {
  createLocalStorage();
  showAllTodo();
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  let leftItems = countLeftItems(currentList);
  document.getElementById("count").innerHTML = `Left items: ${leftItems}`;
  showOrHideClearCompletedBtn(currentList);
}

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

function countLeftItems(currentList) {
  let leftItems = 0;
  let activeTodo = new Map(
    [...currentList].filter(([key, value]) => value === "active")
  );
  return activeTodo.size;
}

function showOrHideClearCompletedBtn(currentList) {
  if (currentList.size > 1) {
    document.getElementById("clear_btn").classList.add("appear");
  } else {
    document.getElementById("clear_btn").classList.remove("appear");
  }
}

function addATodo(event) {
  if (event.keyCode === 13) {
    let input = document.getElementById("input").value;
    if (input) {
      let currentList = jsonToMap(localStorage.getItem("todoList"));
      addContent(currentList, input);
      if (status != "completed") {
        let listNode = document.getElementById("list");
        showList(currentList, listNode, input);
      }
      clearInputBox();
      let leftItems = countLeftItems(currentList);
      document.getElementById("count").innerHTML = `Left items: ${leftItems}`;
      showOrHideClearCompletedBtn(currentList);
    }
  }
}

function addContent(currentList, input) {
  currentList.set(input, "active");
  localStorage.setItem("todoList", mapToJson(currentList));
}

function clearInputBox() {
  if (document.getElementById("input").value) {
    document.getElementById("input").value = "";
  }
}

function showList(currentList, listNode, input) {
  let todoItems = document.createElement("li");
  let todoContent = document.createElement("div");
  let deleteBtn = document.createElement("div");

  todoContent.innerHTML = input;
  todoContent.classList.add("todo_content");
  if (currentList.get(input) === "completed") {
    todoItems.classList.add("completed");
    todoContent.classList.add("completed");
  }

  deleteBtn.innerHTML = "DELETE";
  deleteBtn.classList.add("delete_btn");

  listNode.appendChild(todoItems);
  todoItems.appendChild(todoContent);
  todoItems.appendChild(deleteBtn);

  todoContent.addEventListener("click", () => {
    todoItems.classList.add("completed");
    todoContent.classList.add("completed");
    if (status === "active") {
      listNode.removeChild(todoItems);
    }
    let leftItems = completeATodo(todoContent);
    document.getElementById("count").innerHTML = `Left items: ${leftItems}`;
  });

  deleteBtn.addEventListener("click", () => {
    let leftItems = deleteATodo(todoContent);
    document.getElementById("count").innerHTML = `Left items: ${leftItems}`;
    listNode.removeChild(todoItems);
  });
}

function completeATodo(currentTodo) {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  currentList.set(currentTodo.innerHTML, "completed");
  localStorage.setItem("todoList", mapToJson(currentList));
  let leftItems = countLeftItems(currentList);
  return leftItems;
}

function deleteATodo(currentTodo) {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  currentList.delete(currentTodo.innerHTML);
  localStorage.setItem("todoList", mapToJson(currentList));
  showOrHideClearCompletedBtn(currentList);
  let leftItems = countLeftItems(currentList);
  return leftItems;
}

function showAllTodo() {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  let listNode = document.getElementById("list");
  listNode.innerHTML = "";
  for (let item of currentList.keys()) {
    showList(currentList, listNode, item);
  }
  status = "all";
}

function showActiveTodo() {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  let activeTodo = new Map(
    [...currentList].filter(([key, value]) => value === "active")
  );
  let listNode = document.getElementById("list");
  listNode.innerHTML = "";
  for (let item of activeTodo.keys()) {
    showList(activeTodo, listNode, item);
  }
  status = "active";
}

function showCompletedTodo() {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  let completedTodo = new Map(
    [...currentList].filter(([key, value]) => value === "completed")
  );
  let listNode = document.getElementById("list");
  listNode.innerHTML = "";
  for (let item of completedTodo.keys()) {
    showList(completedTodo, listNode, item);
  }
  status = "completed";
}

function clearCompletedTodo() {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  let activeTodo = new Map(
    [...currentList].filter(([key, value]) => value === "active")
  );
  localStorage.setItem("todoList", mapToJson(activeTodo));
  let listNode = document.getElementById("list");
  listNode.innerHTML = "";
  if (status != "completed") {
    for (let item of activeTodo.keys()) {
      showList(activeTodo, listNode, item);
    }
  }
}