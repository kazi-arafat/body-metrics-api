const AppUserModel = require("../models/AppUser.js");

exports.createAppUser = async function (req, res) {
  let appUser = req.body;
  let tmpUserName = (
    appUser.lastName.charAt(0) + appUser.firstName
  ).toLowerCase();
  const username =
    tmpUserName.length > 8 ? tmpUserName.substring(0, 7) : tmpUserName;
  appUser.username = username;
  const newAppUser = AppUserModel(appUser);
  try {
    await newAppUser.save();
    console.log("User has been added successfully!");
    res.status(201).json(newAppUser);
  } catch (error) {
    console.log(`Error at adding app user. Error message - {error.message}`);
    res
      .status(512)
      .send(`Error at adding app user. Error message - {error.message}`);
  }
};
