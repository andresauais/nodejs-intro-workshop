const express = require("express");

const app = express();
const db = require("./db");

app.get("/", (req, res) => {
  res.status(200).send({
    data: db.User.getUser(),
  });
});

app.get("/users", (req, res) => {
  res.status(200).send({
    data: db.User.getUsers(),
  });
});

module.exports = app;