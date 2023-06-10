// require express router
const router = require("express").Router();

const { createThought,getThoughts } = require("../../controllers/thought-controller");

// set route /api/thoughts for function createThought
router.route("/").post(createThought).get(getThoughts);

// export router
module.exports = router;
