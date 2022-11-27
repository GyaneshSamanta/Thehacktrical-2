const express = require("express");
const router = express.Router();
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

router.get("/fetchAll", (req, res, next) => {
  databases
    .listDocuments("63830306843fefca4d57", "6383032c362272b9688c")
    .then((response) => {
      console.log("All documents are: ", response);
      res.send(response);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});

module.exports = router;
