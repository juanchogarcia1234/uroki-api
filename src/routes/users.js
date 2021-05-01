const express = require("express");
const UserRepo = require("../repos/user-repo");

const router = express.Router();

router.get("/users", async (req, res) => {
  //Run a query
  const users = await UserRepo.find();
  //Send the results of the query
  res.send(users);
});

module.exports = router;
