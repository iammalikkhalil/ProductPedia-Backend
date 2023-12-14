const mongoose = require("mongoose");

const url = `mongodb+srv://khalil:khalil@cluster0.bi3v4gp.mongodb.net/ProductPedia`;

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
