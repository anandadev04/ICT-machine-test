const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://adevd2004:dYLXF1tayAcZpvRO@cluster0.q3jwt5v.mongodb.net/employeetestdb?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
