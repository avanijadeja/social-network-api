// Dependencies
//require express
const express = require("express");
// require connection.js
const db = require("./config/connection");
// require routes
const routes = require("./routes");

const cwd = process.cwd();

// setup express app
const PORT = process.env.PORT || 3001;
const app = express();

// setup the routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
