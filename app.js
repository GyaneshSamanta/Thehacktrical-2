const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./api/config/passport-setup");
const morgan = require("morgan");
const authRoutes = require("./api/routes/authRoutes");
const  bodyParser  = require("body-parser");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.ulr89do.mongodb.net/?retryWrites=true&w=majority"
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["BLOCKY"],
  })
);

// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));
app.get("/home", (req, res, next) => {
  console.log("Reached /home endpoint");
  console.log("User is:", req.user);
});
app.use("/auth", authRoutes);
app.post("/", (req, res, next) => {
  console.log(req.body)
  res.render("home", { user: req.user});
})
module.exports = app;
