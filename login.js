// let access_token = window.localStorage.getItem("jwt-token");
function login() {
  fetch("https://thawing-shelf-98370.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: document.getElementById("Username").value,
      email: document.getElementById("Email").value,
      password: document.getElementById("Password").value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mystorage = window.localStorage;
      console.log(data["access_token"]);
      mystorage.setItem("jwt-token", data["access_token"]);
    });
}

// function submit(event) {
//   event.preventDefault();
//   login();
// }

// form.addEventListener("submit", submit);
