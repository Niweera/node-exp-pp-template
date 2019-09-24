const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
var favicon = require("serve-favicon");

//define routes
const endpoints = require("./routes/api/endpoints");
const items = require("./routes//api/items");
const users = require("./routes/api/users");

//API config start
const app = express();
app.use(favicon(path.join(__dirname, "./favicon.png")));

// fix CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("Successfully Connected to MongoDB");
  })
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/routes", items);
app.use("/users", users);
app.use("/", endpoints); //this route must be at the end
//API config end

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
