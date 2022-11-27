const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./api/config/passport-setup");
const morgan = require("morgan");
const authRoutes = require("./api/routes/authRoutes");
const creditRoutes = require("./api/routes/creditRoutes");
app.use(express.static(path.join(__dirname, "public")));

const sdk = require("node-appwrite");

const client = new sdk.Client();
const databases = new sdk.Databases(client, "63830306843fefca4d57");
client
  .setSelfSigned(true)
  .setEndpoint("https://localhost/v1") // Your API Endpoint
  .setProject("638301ff5e5a0c2339f2") // Your project ID
  .setKey(
    "db65f0c11f3960efeb9bd9ad0e5a8515c3d0c17a8967cd66b63fd0c518b6d7ddfb84d9785a73949db58a52878a7de4fb772c63ad13b0bab5b3c19bc11017e538e1f90acb992723ee2dd0844b3dc8b07bef23b5ea9ecf76bc0b92b461bee6a984e218509bc51e31e06d69acf71d5dcf6b3c3897d5c99fe62e21c03b38ced4b66c"
  );

// const appwrite = new Appwrite();
// appwrite
//     .setEndpoint('http://localhost/v1')
//     .setProject('638301ff5e5a0c2339f2');

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

app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));
app.get("/home", (req, res, next) => {
  console.log("Reached /home endpoint");
  console.log("User is:", req.user);
  res.render("home", { user: req.user });
});
app.use("/auth", authRoutes);

app.use("/credits", creditRoutes);

module.exports = app;
