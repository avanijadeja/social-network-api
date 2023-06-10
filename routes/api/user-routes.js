// require express router
const router = require("express").Router();

const { createUser } = require("../../controllers/user-controller");

//  for route /api/users
router.route("/").post(createUser);

module.exports = router;
