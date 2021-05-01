const express = require("express");
const usersRouter = require("./routes/users");
const cors = require("cors");

module.exports = () => {
  const app = express();
  app.use(cors()); //Tengo que ponerlo el primero porque sino no funciona
  app.use(express.json());
  app.use(usersRouter);
  return app;
};
