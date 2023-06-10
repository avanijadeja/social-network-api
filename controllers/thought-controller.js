const { Thought, User } = require("../models");

const thoughtController = {
  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        
        return User.findOneAndUpdate(
        
          { _id: req.body.userId },
        
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
           );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({
            message: "Thought created, but found no user with that ID",
          });
        }
        res.json({ message: "Thought Created 🎉" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

// export thoghtController
module.exports = thoughtController;
