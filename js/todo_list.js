window.onload = function () {
  createLocalStorage();

  let listNode = document.getElementById("list");

  let currentList = JSON.parse(localStorage.getItem("todoList"));

  for (let item of currentList) {
    showList(listNode, item);
  }

  document.getElementById("count").innerHTML = `Left items: ${currentList.length}`;

  document.getElementById("input").focus();
}

function createLocalStorage() {
  if (!localStorage.todoList) {
    localStorage.setItem("todoList", JSON.stringify([]));
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
  let currentList = JSON.parse(localStorage.getItem("todoList"));
  currentList.push(input);
  localStorage.setItem("todoList", JSON.stringify(currentList));
  return currentList.length;
}

function clearInputBox() {
  if (document.getElementById("input").value) {
    document.getElementById("input").value = "";
  }
}

function showList(listNode, input) {
  let todoItems = document.createElement("li");
  let todoContent = document.createElement("span");
  let deleteBtn = document.createElement("div");

  todoContent.innerHTML = input;
  deleteBtn.innerHTML = "DELETE";
  deleteBtn.classList.add("delete_btn");

  listNode.appendChild(todoItems);
  todoItems.appendChild(todoContent);
  todoItems.appendChild(deleteBtn);

  todoItems.addEventListener("click", () => {
    todoItems.classList.add("selected");
  });

  deleteBtn.addEventListener("click", () => {
    let itemsNumber = deleteATodo(todoContent);
    document.getElementById("count").innerHTML = `Left items: ${itemsNumber}`;
    listNode.removeChild(todoItems);
  });
}

function deleteATodo(currentTodo) {
  let currentList = JSON.parse(localStorage.getItem("todoList"));
  let index = currentList.indexOf(currentTodo.innerHTML);
  currentList.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(currentList));
  return currentList.length;
}
