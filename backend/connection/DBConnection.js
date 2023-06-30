const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Connected Successfully.");
      });
  } catch (error) {
    console.log(error.message);
    console.log("Database Connection Failed");
  }
};

module.exports = connection;
