// require express router
const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
} = require("../../controllers/thought-controller");

// set route /api/thoughts for function createThought
router.route("/").post(createThought).get(getThoughts);

// set route /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought);
// export router
module.exports = router;
