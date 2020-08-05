const express = require("express");
const mongoose = require("mongoose");
const Comment = require("./models/Comment");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({
  path: `../.env.production`,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DBNAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.post("/api/createComment", (req, res) => {
  const nick = req.body.name;
  const comment = req.body.comment;
  if (
    nick.length > 28 ||
    comment.length > 100 ||
    nick.length < 1 ||
    comment.length < 1
  ) {
    res.status(400);
  } else {
    const newComment = new Comment({ nick, comment, accepted: false });
    newComment
      .save()
      .then(() => res.json({ message: "success" }))
      .catch((err) => res.status(400));
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
