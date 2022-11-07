const input = document.getElementById("post-input");
const form = document.getElementById("post-form");
const wrapper = document.querySelector(".wrapper");
const commentWrapper = document.querySelector(".comment-wrapper");

form.addEventListener("submit", getUserPost);

async function getUserPost(event) {
  event.preventDefault();
  wrapper.innerHTML = "";
  commentWrapper.innerHTML = "";
  try {
    const id = input.value;
    let validValue = isValid(id);
    if (validValue) {
      return alert("You can use only numbers 1...100");
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const postData = await response.json();
    createPost(`${postData.title}`, `${postData.body}`);
    const commentResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const commentData = await commentResponse.json();
    commentData.forEach((comment) => {
      createComment(`${comment.name}`, `${comment.email}`, `${comment.body}`);
    });
  } catch (error) {
    console.log(error);
  }
}

function isValid(value) {
  return value < 1 || value > 100 || isNaN(value);
}

function createPost(elTitle, text) {
  const div = document.createElement("div");
  div.classList.add("post");
  const title = document.createElement("h1");
  title.textContent = elTitle;
  const body = document.createElement("p");
  body.textContent = text;
  div.append(title);
  div.append(body);
  wrapper.append(div);
}

function createComment(name, mail, text) {
  const div = document.createElement("div");
  div.classList.add("comment");
  const userName = document.createElement("h3");
  userName.textContent = name;
  const userMail = document.createElement("a");
  userMail.setAttribute("href", `${mail}`);
  userMail.textContent = mail;
  const body = document.createElement("p");
  body.textContent = text;
  div.append(userName);
  div.append(userMail);
  div.append(body);
  commentWrapper.append(div);
}
