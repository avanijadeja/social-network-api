// require express router.
const router = require("express").Router();

// require thought-controller.
const {
  createThought,
  getThoughts,
  getSingleThought,
  updateSingleThought,
  deleteSingleThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// set route /api/thoughts for function createThought and getThoughts.
router.route("/").post(createThought).get(getThoughts);

// set route /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateSingleThought)
  .delete(deleteSingleThought);

//  set route /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// set route /api/thoughts/:thoughtId/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

// export router.
module.exports = router;
