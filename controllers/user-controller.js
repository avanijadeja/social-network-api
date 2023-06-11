// require models User and Thought models.
const { User, Thought } = require("../models");

//  Create userController for all user functions
const userController = {
  // Create a new User using create().
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // get all Users using find().
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // get a single User using findOne().
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      // using populate() user data also shows friends data for particular userId
      .populate("friends")
      // using populate() user data also shows thoughts data for particular userId
      .populate("thoughts")
      .then((dbUserData) => {
        // if no user find then error occur.
        if (!dbUserData) {
          return res.status(404).json({ message: "User does not exist." });
        }
        // pass userdata in json format
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update a user using findOneAndUpdate.
  updateSingleUser(req, res) {
    User.findOneAndUpdate(
      {
        // set id value which we pass in params
        _id: req.params.userId,
      },
      // set changes which pass in req.body
      { $set: req.body },
      // runValidators apply validation on new data, new:true means new data apply on documentation. you can use new:true or returnOriginal:false.
      { runValidators: true, new: true }
    )
      .then((dbUserData) => {
        // if user not find then error message occured.
        if (!dbUserData) {
          return res.status(404).json({ message: "User does not exist." });
        }
        // otherwise response is updated data in json format.
        res.json(dbUserData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a single user and thoughts using deleteSingleUser().
  deleteSingleUser(req, res) {
    // delete particular data which userid passed in paramater.
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        // if no user found then error message occured.
        if (!dbUserData) {
          return res.status(404).json({ message: "User does not exist." });
        }

        // get userid and delete their thoughts
        return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      })
      // succesfully deleted user and user'thoughts.
      .then(() => {
        res.json({ message: "User and corresponding thoughts are deleted" });
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).j(err);
      });
  },

  // Add a new friend using findByIdAndUpdate().
  addFriend(req, res) {
    User.findByIdAndUpdate(
      // take userId and friendId which passed in parameter.
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      // updated new changes in document.
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          // no user found with userId then error message generated.
          return res.status(404).json({ message: "User does not exist." });
        }
        // else updated dbUserData with new data.
        res.json(dbUserData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Remove Friend using findOneAndUpdate().
  removeFriend(req, res) {
    User.findOneAndUpdate(
      // take userId from parameter.
      { _id: req.params.userId },
      // remove friend (take friendId from parameter ) using pull method.
      { $pull: { friends: req.params.friendId } },
      //  update new changed in document.
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          //  if no user found with userId , error message occurred.
          return res.status(404).json({ message: "User does not exit." });
        }
        // else updated dbUserData with new data.
        res.json(dbUserData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

// export userController
module.exports = userController;
