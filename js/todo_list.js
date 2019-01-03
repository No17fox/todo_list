function addATodo(event) {
  if (event.keyCode === 13) {
    createLocalStorage();
    let input = document.getElementById("input").value;
    addContent(input);
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