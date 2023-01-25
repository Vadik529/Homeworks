const API_URL = "http://127.0.0.1:3000";
const usersBlock = document.querySelector(".users-block");

const addUserHTML = ({ id, name, age }) => {
  const div = document.createElement("div");
  div.setAttribute("data-id", id);

  div.insertAdjacentHTML(
    "beforeend",
    `<p><span>User: ${name}, age: ${age}</span><button data-action="delete">Delete</button><button data-action="edit">Edit</button></p>`
  );
  usersBlock.append(div);
};

const getUsers = () =>
  fetch(`${API_URL}/users`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      usersBlock.innerHTML = "";
      data.forEach(addUserHTML);
    })
    .catch((error) => {
      alert(error.message);
    });

getUsers();

document.forms.user.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const age = this.age.value;

  if (!name || !age) {
    alert("Fields can not be empty!");
    return;
  }

  fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => addUserHTML(data))
    .catch((error) => alert(error.message));
  user.reset();
});

usersBlock.addEventListener("click", function (event) {
  if (event.target.dataset.action !== "delete") return;
  const id = event.target.closest("[data-id]").dataset.id;
  fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => getUsers())
    .catch((error) => alert(error.message));
});

const editUser = document.querySelector(".edit-user");

let id = null;

usersBlock.addEventListener("click", function (event) {
  if (event.target.dataset.action !== "edit") return;
  id = event.target.closest("[data-id]").dataset.id;
  editUser.classList.remove("hidden");
  document.forms.editForm.nameEdit.value = "";
  document.forms.editForm.ageEdit.value = "";
});

document.forms.editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.nameEdit.value;
  const age = this.ageEdit.value;

  fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ id, name, age }),
  })
    .then((response) => response.json())
    .then((data) => changeUser(data))
    .catch((error) => alert(error.message));
});

const changeUser = ({ name, age }) => {
  const child = usersBlock.children;

  for (let elem of child) {
    if (elem.dataset.id === id) {
      if (!name || !age) {
        alert("Fields can not be empty!");
        return;
      }
      elem.innerHTML = "";
      elem.insertAdjacentHTML(
        "beforeend",
        `<p><span>User: ${name}, age: ${age}</span><button data-action="delete">Delete</button><button data-action="edit">Edit</button></p>`
      );
    }
  }

  editUser.classList.add("hidden");
};
