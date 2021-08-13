fetch("https://thawing-shelf-98370.herokuapp.com/auth", {
  method: "post",
  body: JSON.stringify({
    username: "Zaid",
    password: "skimask999",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => {
    (storage = window.localStorage),
      console.log(json["access_token"]),
      storage.setItem("jwt-token", json["access_token"]);
  });

fetch("https://thawing-shelf-98370.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://thawing-shelf-98370.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data);
    json.data.forEach((item) => {
      console.log(item);
      console.log(item[1]);
    });
    renderproducts(json.data);
  });

function renderproducts(products) {
  let productContainer = document.querySelector("#container");
  productContainer.innerHTML = "";

  products.forEach((products) => {
    productContainer.innerHTML += `
      <div class="products">
        <h3 class="product-name items">${products[1]}</h3>
        <h3 class="product-price items">${products[2]}</h3>
        <h3 class="product-amount items">${products[3]}</h3>
        <div class="btn">
        <button class="add-btn">Add to cart</button>
        </div>

        <div class="Delete">
        <button class="del-btn">DELETE</button>
        </div>


    `;
  });
}

function del() {
  fetch("https://thawing-shelf-98370.herokuapp.com/get-blogs/", {
    method: "DELETE",
  });
}

function add() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("Price").value;
  let quantity = document.getElementById("quantity").value;

  fetch("https://thawing-shelf-98370.herokuapp.com/create-blogs/", {
    method: "POST",
    body: JSON.stringify({
      prod_name: name,
      prod_price: price,
      amount: quantity,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `jwt ${storage.getItem("jwt-token")}`,
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
