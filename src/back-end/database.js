const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/BD", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));
