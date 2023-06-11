// require models User and Thought models.
const { Thought, User } = require("../models");

//  Create thoughtController for all thought function.
const thoughtController = {
  // Create a new thought using create().
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          // for particular User add thought using thought_id
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          // if user not found with particular Id error generated.
          return res.status(404).json({
            message: "Thought created, but found no user with that ID",
          });
        }
        // else thought created.
        res.json({ message: "Thought Created 🎉" });
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get all thoughts usinf find().
  getThoughts(req, res) {
    Thought.find()
      // sort all data in descending order
      .sort({ createdAt: -1 })
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single Thought using findOne().
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "Thought with this Id does not exist." });
        }
        res.json(dbThoughtData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update a single Thought using findOneAndUpdate().
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      // set id value which we pass in params
      { _id: req.params.thoughtId },
      // set changes which pass in req.body
      { $set: req.body },
      // runValidators apply validation on new data, new:true means new data apply on documentation. you can use new:true or returnOriginal:false.
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "Thought with this ID does not exist." });
        }
        res.json(dbThoughtData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a single Thought using findOneAndDelete().
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "Thought with this Id does not exit." });
        }

        // Remove Thought id from user's thoughts field
        return User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({
            message: "Thought created but no user found with this Id",
          });
        }
        res.json({ message: "Deleted Thought!" });
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add reaction in Thought using findOneAndUpdate().
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      {
        $addToSet: { reactions: req.body },
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "User with this Id does not exist." });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //  Remove Reaction from Thought using findOneAndUpdate().
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "Thought with this Id does not exist." });
        }
        res.json(dbThoughtData);
      })
      // if error occur catch the error.
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

// export thoghtController
module.exports = thoughtController;
