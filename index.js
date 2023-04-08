const express = require("express");
const app = express();
const Users = require("./api/auth");
require("./configs/db_connect");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", Users);

app.listen(8080, (error) => {
  if (error) {
    console.log(`${error}  some error is found`);
  } else {
    console.log("server connected with port 8080");
  }
});
