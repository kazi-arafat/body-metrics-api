const mongoose = require("mongoose");

const appUserSchema = mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  dob: Date,
  gender: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const AppUser = mongoose.model("AppUser", appUserSchema);

module.exports = AppUser;
