// reuqire express router
const router = require("express").Router();
// require ./api
const apiRoutes = require("./api");
// for /api use apiRoutes
router.use("/api", apiRoutes);
// error if request not correct
router.use((req, res) => {
  return res.send("wrong route");
});
// export router
module.exports = router;
