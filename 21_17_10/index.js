const link = "https://fakestoreapi.com/products";
const wrapper = document.getElementById("wrapper");
const select = document.getElementById("select");
let optionSet = new Set();

function filter(card) {
  return function sort(e) {
    const todos = card.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "men's clothing":
          if (todo.getAttribute("data-category") == "men's clothing") {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;

        case "jewelery":
          if (todo.getAttribute("data-category") == "jewelery") {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;

        case "electronics":
          if (todo.getAttribute("data-category") == "electronics") {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;
        case "women's clothing":
          if (todo.getAttribute("data-category") == "women's clothing") {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;

        case "all":
          todo.style.display = "block";
      }
    });
  };
}

fetch(link)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      createContent(element);
    });
    data.forEach((element) => {
      const option = document.createElement("option");
      option.setAttribute("value", element.category);
      option.textContent = element.category;
      if (optionSet.has(option.textContent)) {
        return;
      } else {
        optionSet.add(option.textContent);
        select.append(option);
        console.log(optionSet);
      }
    });
  })
  .catch((error) => console.error(error.message));

function createContent(el) {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("cardWrapper");

  const header = document.createElement("h1");
  header.innerText = el.title;
  header.classList.add("header");

  const img = document.createElement("img");
  img.setAttribute("src", el.image);
  img.classList.add("img");

  const category = document.createElement("p");
  category.innerText = `Category: ${el.category}`;
  cardWrapper.setAttribute("data-category", el.category);

  const price = document.createElement("p");
  price.innerText = el.price;
  cardWrapper.append(header);
  cardWrapper.append(img);
  cardWrapper.append(category);
  cardWrapper.append(price);
  wrapper.append(cardWrapper);
}

select.addEventListener("change", filter(wrapper));
