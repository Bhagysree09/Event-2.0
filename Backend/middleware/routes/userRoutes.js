const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  changePassword,
} = require("../controller/userController");

// Create a new user
router.post("/c", createUser);

// User login
router.post("/login", loginUser);

// Update user by ID
router.put("/:id", updateUser);

// Delete user by ID
router.delete("/:id", deleteUser);

// Get all users
router.get("/", getAllUsers);

// Get user by ID
router.get("/:id", getUserById);

// Change password
router.put("/:id/change-password", changePassword);

module.exports = router;
