const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/users", (request, response) => {
  const users = fs.readFileSync("users.json");
  return response.send(users);
});

app.post("/users", (req, res) => {
  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const id = data.length === 0 ? 1 : data.at(-1).id + 1;

  const newUser = {
    id,
    ...req.body,
  };

  data.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify(data));

  return res.send(JSON.stringify(newUser));
});

app.put("/users/:id", (req, res) => {
  const id = req.params["id"];
  const users = fs.readFileSync("users.json");

  const data = JSON.parse(users);
  const index = data.findIndex((user) => user.id == id);

  if (index !== -1) {
    const editUser = {
      id,
      ...req.body,
    };
    data.splice(index, 1, editUser);
    fs.writeFileSync("users.json", JSON.stringify(data));
    return res.send(editUser);
  }
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  const users = fs.readFileSync("users.json");

  const data = JSON.parse(users);

  const index = data.findIndex((user) => user.id == id);

  if (index !== -1) {
    data.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify(data));
    return res.send({ message: "User was deleted." });
  } else {
    return res.status(400).send(`Not found user with id ${id}`);
  }
});

app.listen(3000, () => {
  console.log("Server starts");
});
