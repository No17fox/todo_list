window.onload = function () {
  let list = document.getElementById("list");

  createLocalStorage();

  let content = JSON.parse(localStorage.getItem("todoList"));
  for (let i = 0; i < content.length; i++) {
    createList(list, content[i]);

    // del.addEventListener("click", () => {deleteTodo(ul, li, content)});
  }

  document.getElementById("count").innerHTML = 'Left items: ' + content.length;

  document.getElementById("input").focus();
}

function addATodo(event) {
  if (event.keyCode === 13) {
    let input = document.getElementById("input").value;
    addContent(input);
    showList(input);
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
  let list = document.getElementById("list");
  createList(list, input);
}

function createList(list, input) {
  let todo = document.createElement("li");
  let deleteBtn = document.createElement("div");

  todo.innerHTML = input;
  deleteBtn.innerHTML = "DELETE";
  deleteBtn.classList.add("delete_btn");

  list.appendChild(todo);
  todo.appendChild(deleteBtn);

  todo.addEventListener("click", () => {
    todo.classList.add("selected");
  });
}

// function deleteTodo(ul, li, todoList) {
//   // let list = JSON.parse(todoList);
//   let index = todoList.find(li.childNodes.innerHTML);
//   todoList.splice(index);
//   ul.removeChild(li);
// }