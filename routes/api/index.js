// require express router
const router = require("express").Router();
// require user-routes
const userRoutes = require("./user-routes");
// require thought-routes
// const thoughtRoutes = require('./thought-routes');

//  set route path
router.use("/users", userRoutes);
// router.use('./thoughts',thoughtRoutes);

// export router
module.exports = router;
