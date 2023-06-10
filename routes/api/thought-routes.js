// require express router
const router = require("express").Router();

const { createThought } = require("../../controllers/thought-controller");

// set route /api/thoughts for function createThought
router.route("/").post(createThought);

// export router
module.exports = router;
