window.onload = function () {
  createLocalStorage();
  let listNode = document.getElementById("list");
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  for (let item of currentList.keys()) {
    showList(listNode, item);
  }

  document.getElementById("count").innerHTML = `Left items: ${currentList.length}`;
  document.getElementById("input").focus();
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

function addATodo(event) {
  if (event.keyCode === 13) {
    let input = document.getElementById("input").value;
    let listNode = document.getElementById("list");

    if (input) {
      let itemsNumber = addContent(input);
      showList(listNode, input);
      clearInputBox();
      document.getElementById("count").innerHTML = `Left items: ${itemsNumber}`;
    }
  }
}

function addContent(input) {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  currentList.set(input, "active");
  localStorage.setItem("todoList", mapToJson(currentList));
  return currentList.size;
}

function clearInputBox() {
  if (document.getElementById("input").value) {
    document.getElementById("input").value = "";
  }
}

function showList(listNode, input) {
  // let currentList = jsonToMap(localStorage.getItem("todoList"));

  let todoItems = document.createElement("li");
  let todoContent = document.createElement("div");
  let deleteBtn = document.createElement("div");

  todoContent.innerHTML = input;
  todoContent.classList.add("todo_content");
  // if (currentList.get(input) === "completed") {
  //   todoItems.classList.add("completed");
  // }

  deleteBtn.innerHTML = "DELETE";
  deleteBtn.classList.add("delete_btn");

  listNode.appendChild(todoItems);
  todoItems.appendChild(todoContent);
  todoItems.appendChild(deleteBtn);

  todoContent.addEventListener("click", () => {
    todoItems.classList.add("completed");
    todoContent.classList.add("completed");
    completeATodo(todoContent);
  });

  deleteBtn.addEventListener("click", () => {
    let itemsNumber = deleteATodo(todoContent);
    document.getElementById("count").innerHTML = `Left items: ${itemsNumber}`;
    listNode.removeChild(todoItems);
  });
}

function completeATodo(currentTodo) {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  currentList.set(currentTodo.innerHTML, "completed");
  localStorage.setItem("todoList", mapToJson(currentList));
}

function deleteATodo(currentTodo) {
  let currentList = jsonToMap(localStorage.getItem("todoList"));
  currentList.delete(currentTodo.innerHTML);
  localStorage.setItem("todoList", mapToJson(currentList));
  return currentList.size;
}
