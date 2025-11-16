const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  handleDelete,
} = require("../controllers/user");

// REST API
router.route("/").get(getAllUsers).post(createNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(handleDelete);

module.exports = router;
