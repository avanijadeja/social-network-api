// require express router
const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  CreateUser,
  UpdateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");
