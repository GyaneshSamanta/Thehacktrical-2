const passport = require("passport");
const oauth = require("passport-google-oauth20");
const User = require("../models/user");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20");
const path = require("path");
require("dotenv").config();
const profile = oauth.profile;
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

//when cookies comes from the browser
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the Google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      console.log("Access Token:", accessToken);

      //make or get user
      User.findOne({ googleId: profile.id }).then(async (currentUser) => {
        if (currentUser) {
          //already have the user
          console.log("User is: ", currentUser);
          done(null, currentUser);
        } else {
          console.log("Doesn't exist");
          var myNewUser = "";
          //User creation
          await new User({
            _id: new mongoose.Types.ObjectId(),
            googleId: profile.id,
            email: profile.emails[0].value,
            displayName: profile.displayName,
            profilePicture: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log("New user cerated: ", newUser);
              myNewUser = newUser;
            });
          databases.createDocument(
            "63830306843fefca4d57",
            "6383032c362272b9688c",
            "unique()",
            {
              credits: 0,
              username: profile.displayName,
              userId: profile.id,
              status: "disallow",
              email: profile.emails[0].value,
            }
          );

          await done(null, myNewUser);
        }
      });
    }
  )
);
