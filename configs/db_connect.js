const mongoDB =
  "mongodb+srv://DhruvalGorasiya:Dhruval9535@farmdarabase.ttrrffj.mongodb.net/farm_database";
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = mongoose
  .connect(mongoDB)
  .catch((error) => console.log("mongoDB connection error" + error))
  .then(console.log("mongoDB Connected"));

module.exports = connectDB;
