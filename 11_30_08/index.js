const form = document.forms.taskForm;
const input = document.querySelector("input");
const select = document.querySelector(".filterOption");

const tasksArray = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskObj = {
    id: Date.now(),
    name: form.input.value,
    isDone: false,
  };

  tasksArray.push(newTaskObj);

  console.log(tasksArray);

  const newTask = createNewElement(
    "div",
    newTaskObj.id,
    "inputWrapper",
    "",
    "",
    form
  );

  const newElem = createNewElement("p", "", "", "", "", newTask);

  newElem.textContent = form.input.value;

  newElem.classList.add("inProgress");

  const newCheckbox = createNewElement(
    "input",
    "",
    "",
    "checkbox",
    "isDone",
    newElem
  );
  newCheckbox.className = "checkbox";

  const close = document.createElement("span");
  const txt = document.createTextNode("\u00d7");
  
  close.className = "close";
  close.append(txt);

  newElem.append(close);

  form.reset();

  newCheckbox.addEventListener("change", checkedStatus);

  close.addEventListener("click", function () {
    newTask.remove();
  });

  select.addEventListener("input", filterTodo);

  function filterTodo(e) {
    const todos = newTask.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.classList.remove("unvisible");
          break;

        case "done":
          if (todo.classList.contains("done")) {
            todo.classList.remove("unvisible");
          } else {
            todo.classList.add("unvisible");
          }
          break;

        case "inProgress":
          if (todo.classList.contains("inProgress")) {
            todo.classList.remove("unvisible");
          } else {
            todo.classList.add("unvisible");
          }
          break;

        default:
          todo.classList.remove("visible");
      }
    });
  }
});

function checkedStatus(event) {
  const wrapper = this.closest(".inputWrapper");
  const id = wrapper.getAttribute("data-id");
  const p = wrapper.querySelector("p");

  p.classList.add("all");

  const task = tasksArray.find((taskItem) => taskItem.id == id);
  task.isDone = this.checked;

  if (task.isDone) {
    p.classList.add("input-through");
    p.classList.toggle("done");
    p.classList.toggle("inProgress");
  } else {
    p.classList.remove("input-through", "done");
    p.classList.toggle("inProgress");
  }
}

function createNewElement(element, id, clas, type, value, before) {
  const newEl = document.createElement(element);

  newEl.setAttribute("data-id", id);
  newEl.setAttribute("class", clas);
  newEl.setAttribute("type", type);
  newEl.setAttribute("value", value);

  before.append(newEl);

  return newEl;
}

form.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    this.classList.remove("classError");
    this.closest(".inputWrapper")
      .querySelectorAll(".errorText")
      .forEach((error) => error.remove());
  });
});
