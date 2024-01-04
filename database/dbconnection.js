const mongoose = require("mongoose");

const url = `mongodb+srv://aqibqazidb:QE_productPedia@cluster0.canrteb.mongodb.net/productPedia?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

mongoose.connect(url, connectionParams);
