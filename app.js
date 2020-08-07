const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 5000;

require("dotenv").config();

const Comment = require("./models/Comment");

const DBUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose
  .connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Failed DB");
  });

app.post("/api/createComment", (req, res) => {
  const nick = req.body.name;
  const comment = req.body.comment;
  if (
    nick.length > 28 ||
    comment.length > 100 ||
    nick.length < 1 ||
    comment.length < 1
  ) {
    res
      .status(400)
      .json({ message: "Nick lub komentarz nie spełnia wymagań." });
  } else {
    const newComment = new Comment({ nick, comment, accepted: false });
    newComment
      .save()
      .then(() => res.json({ message: "success" }))
      .catch(() =>
        res.status(400).json({ message: "Błąd dodawania komentarza" })
      );
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
