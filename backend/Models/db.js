const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
