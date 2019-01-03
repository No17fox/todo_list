window.onload = function () {
  let ul = document.getElementById("list");
  createLocalStorage();
  let content = JSON.parse(localStorage.getItem("todoList"));
  for (let i = 0; i < content.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = content[i];
    ul.appendChild(li);
  }
  document.getElementById("count").innerHTML = 'Left items: ' + content.length;
  document.getElementById("input").focus();

  let allList = document.querySelectorAll("li");
  for (let list of allList) {
    list.addEventListener("click", () => {
      list.classList.add("selected");
    });
  }
}

function addATodo(event) {
  if (event.keyCode === 13) {
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
    document.getElementById("count").innerHTML = 'Left items: ' + list.length;
  }
}

function clearInputBox() {
  if (document.getElementById("input").value) {
    document.getElementById("input").value = "";
  }
}

function showList(input) {
  let ul = document.getElementById("list");
  let li = document.createElement("li");
  li.innerHTML = input;
  ul.appendChild(li);
  li.addEventListener("click", () => {
    li.classList.add("selected");
  });
}