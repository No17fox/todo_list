window.onload = function () {
  let list = document.getElementById("list");
  let content = JSON.parse(localStorage.getItem("todoList"));
  for (let i = 0; i < content.length; i++) {
    let element = document.createElement("li");
    element.innerHTML = content[i];
    list.appendChild(element);
  }
}

function addATodo(event) {
  if (event.keyCode === 13) {
    createLocalStorage();
    let input = document.getElementById("input").value;
    addContent(input);
    showList(input)
    clearInputBox();
  }
}

function createLocalStorage() {
  if (!localStorage.todoList) {
    localStorage.setItem("todoList", JSON.stringify([]));
  }
}

function addContent(input) {
  if (input) {
    let list = JSON.parse(localStorage.getItem("todoList"));
    list.push(input);
    localStorage.setItem("todoList", JSON.stringify(list));
  }
}

function clearInputBox() {
  if (document.getElementById("input").value) {
    document.getElementById("input").value = "";
  }
}

function showList(input) {
  let list = document.getElementById("list");
  let element = document.createElement("li");
  element.innerHTML = input;
  list.appendChild(element);
}