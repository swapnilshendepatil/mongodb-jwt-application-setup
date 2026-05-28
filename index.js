const express = require("express");
const { UserModel, TodoModel } = require("./db.js");
const { auth, JWT_SECRET } = require("./auth.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  await UserModel.create({
    name: name,
    email: email,
    password: password,
  });
  res.json({
    message: "Signup successfully..!",
  });
});
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (response) {
    const token = jwt.sign(
      {
        id: response._id,
      },
      JWT_SECRET,
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      err: "Invalid Credentials please try again..",
    });
  }
});
app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });
  res.json({
    message: "Todo Create Successfully..",
  });
});
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;

  const response = await TodoModel.findOne({
    userId,
  });
  res.json({
    response,
  });
});

app.listen(3000, () => {
  console.log(`listen on server ${3000}`);
});
