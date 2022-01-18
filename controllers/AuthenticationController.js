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

exports.login = function (req, res) {
  let loginReqData = req.body;
  console.log(loginReqData);
  try {
    if (loginReqData.email) {
      AppUserModel.find({ email: loginReqData.email }, (err, doc) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({ msg: "In valid username/email" });
        } else {
          console.log(doc);
          if (doc.length > 0) {
            if (doc[0].password == loginReqData.password) {
              res
                .status(200)
                .json({ msg: "Authenticated", username: doc[0].username });
            } else {
              res.status(401).json({ msg: "In valid password" });
            }
          } else {
            res.status(404).send({ msg: "User not found" });
          }
        }
      });
    }
    if (loginReqData.username) {
      AppUserModel.find({ username: loginReqData.username }, (err, doc) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({ msg: "In valid username/email" });
        } else {
          if (doc) {
            if (doc[0].password == loginReqData.password) {
              res.status(200).json({ msg: "Authenticated" });
            } else {
              res.status(401).json({ msg: "In valid password" });
            }
          } else {
            res.status(404).send({ msg: "User not found" });
          }
        }
      });
    }
  } catch (error) {
    res.status(510).json({ msg: "Internal server error." });
    console.log(`Error at login - {error.message}`);
  }
};
