// require express router
const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
} = require("../../controllers/thought-controller");

// set route /api/thoughts for function createThought
router.route("/").post(createThought).get(getThoughts);

// set route /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//  set route /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions").post(addReaction);

// export router
module.exports = router;
