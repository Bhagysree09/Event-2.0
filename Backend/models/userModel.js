const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the  name."],
    },
    email: {
      type: String,
      required: [true, "Please add the email address."],
      unique: [true, "Email address is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    phonenumber: {
      type: String,
      required: [true, "Please add the phonenumber."],
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
