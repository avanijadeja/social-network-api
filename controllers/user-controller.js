// require models User and Thought
const { User, Thought } = require("../models");

const userController = {
  // Create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

// export userController
module.exports = userController;
