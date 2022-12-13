const form = document.forms.taskForm;
const input = document.querySelector("input");
const select = document.querySelector(".filterOption");
const taskListBlock = document.getElementById("taskList");

const TASK_LIST = "taskList";

const tasksList = getLS(TASK_LIST, []);

const addButton = document.createElement("button", "add-button");
addButton.textContent = "Save";
taskListBlock.prepend(addButton);

tasksList.forEach(function (task) {
  const newTask = createElement("div", "task");
  newTask.setAttribute("data-id", task.id);

  for (key in task) {
    if (key === "id" || key === "isDone") continue;
    const newElem = createElement("p", "inProgress");
    newElem.textContent = task[key];
    newTask.append(newElem);

    createContent(newElem, newTask);

    const editButton = createElement("button", "button");

    editButton.setAttribute("data-action", "edit");
    editButton.textContent = "Edit";
    newTask.append(editButton);
  }
  taskListBlock.append(newTask);

  taskListBlock.addEventListener("click", changeTask);

  select.addEventListener("input", filterTodo(newTask));
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTaskObj = {
    id: Date.now(),
    name: this.input.value,
    isDone: false,
  };

  tasksList.push(newTaskObj);

  setLS(TASK_LIST, tasksList);

  const newTask = createElement("div", "task");
  newTask.setAttribute("data-id", newTaskObj.id);

  const newElem = createElement("p", "inProgress");
  newElem.textContent = this.input.value;
  newTask.append(newElem);

  createContent(newElem, newTask);

  form.reset();
  const editButton = createElement("button", "button");

  editButton.setAttribute("data-action", "edit");
  editButton.textContent = "Edit";
  newTask.append(editButton);

  taskListBlock.append(newTask);

  taskListBlock.addEventListener("click", changeTask);

  select.addEventListener("input", filterTodo(newTask));
});

function filterTodo(newTask) {
  return function sortTodo(e) {
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
  };
}

function changeTask(event, newTask) {
  const action = event.target.getAttribute("data-action");
  if (action) {
    const id = event.target.closest("[data-id]").getAttribute("data-id");
    const task = tasksList.find((value) => value.id === +id);
    const taskIndex = tasksList.indexOf(task);
    form.input.value = task.name;
    const taskFromLS = getLS(TASK_LIST, task);
    changeTaskName = event.target.closest(".task").querySelector("p");

    addButton.addEventListener("click", function (e) {
      taskFromLS[taskIndex].name = form.input.value;
      changeTaskName.textContent = taskFromLS[taskIndex].name;
      createContent(changeTaskName, newTask);
      setLS(TASK_LIST, taskFromLS);
    });
  }
}

function createContent(place, task) {
  const newCheckbox = createElement("input", "checkbox");
  newCheckbox.setAttribute("type", "checkbox");
  place.append(newCheckbox);

  const close = createElement("span", "close");
  const txt = document.createTextNode("\u00d7");
  close.append(txt);
  place.append(close);

  close.addEventListener("click", function (event) {
    task.remove();
    removeFromLS(event);
  });

  place.append(close);

  newCheckbox.addEventListener("change", checkedStatus);
}

function checkedStatus(event) {
  const wrapper = this.closest(".task");
  const id = wrapper.getAttribute("data-id");
  const p = wrapper.querySelector("p");

  p.classList.add("all");

  const task = tasksList.find((taskItem) => taskItem.id == id);
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

function removeFromLS(event) {
  let todos = getLS(TASK_LIST, []);
  const id = event.target.closest("[data-id]").getAttribute("data-id");
  const task = todos.find((value) => value.id === +id);
  let taskIndex = todos.indexOf(task);
  todos.splice(taskIndex, 1);
  setLS(TASK_LIST, todos);
}

function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLS(key, defaultValue) {
  const lsValue = localStorage.getItem(key);
  return lsValue === null && defaultValue ? defaultValue : JSON.parse(lsValue);
}

function createElement(element, classValue) {
  const el = document.createElement(element);
  el.classList.add(classValue);
  return el;
}
