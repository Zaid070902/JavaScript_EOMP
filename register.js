fetch("https://thawing-shelf-98370.herokuapp.com/get-user/", {
  method: "POST",
  body: JSON.stringify({
    first_name: ,
    last_name: ,
    username: ,
    password: ,
    email: ,
  }),

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
