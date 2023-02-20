fetch("https://fakestoreapi.com/products/categories")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to get categories from API");
    }
    return response.json();
  })
  .then((categories) => {
    const categorySelect = document.createElement("select");
    categorySelect.className = "form-select my-3";

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    document.getElementById("product-container").appendChild(categorySelect);

    const productContainer = document.createElement("div");

    productContainer.className = "row row-cols-1 row-cols-md-3 g-4";
    productContainer.id = "product-container";
    document.getElementById("product-container").appendChild(productContainer);

    categorySelect.addEventListener("change", () => {
      const selectedCategory = categorySelect.value;

      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to get products for category ${selectedCategory} from API`
            );
          }
          return response.json();
        })
        .then((products) => {
          productContainer.innerHTML = "";

          products.forEach((product) => {
            const card = createProductCard(product);
            productContainer.appendChild(card);
          });
        })
        .catch((error) => {
          console.error(error);
          alert(
            `Failed to get products for category ${selectedCategory} from API: ${error}`
          );
        });
    });
  })
  .catch((error) => {
    console.error(error);
    alert(`Failed to get categories from API: ${error}`);
  });

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "col";
  card.innerHTML = `
    <div class="card h-100">
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="price">$${product.price}</div>
        </div>
      </div>
    </div>
  `;
  return card;
}
