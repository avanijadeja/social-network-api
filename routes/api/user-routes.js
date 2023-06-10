// require express router
const router = require("express").Router();

const { createUser, getUsers } = require("../../controllers/user-controller");

//  for route /api/users
router.route("/").post(createUser).get(getUsers);

module.exports = router;
