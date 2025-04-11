const mongoose = require("mongoose");

mongoose
    .connect(
    "mongodb+srv://phatanibrahim71685:yaZtR3iEzTR2oQaB@mernauth.otolc87.mongodb.net/?retryWrites=true&w=majority&appName=mernauth",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
