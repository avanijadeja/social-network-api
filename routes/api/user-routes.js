// require express router
const router = require("express").Router();

const {
  createUser,
  getUsers,
  getSingleUser,
} = require("../../controllers/user-controller");

//  for route /api/users
router.route("/").post(createUser).get(getUsers);

//  for route /api/users/:userId
router.route("/:userId").get(getSingleUser);



// export router
module.exports = router;
