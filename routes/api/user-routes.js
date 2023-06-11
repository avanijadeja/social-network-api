// require express router
const router = require("express").Router();

// require user-controller.
const {
  createUser,
  getUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

//  set route /api/users for function createUser and getUsers.
router.route("/").post(createUser).get(getUsers);

//  set route /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser);

// set route /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// export router
module.exports = router;
