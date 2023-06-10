// require express router
const router = require("express").Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

//  for route /api/users
router.route("/").post(createUser).get(getUsers);

//  for route /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// export router
module.exports = router;
