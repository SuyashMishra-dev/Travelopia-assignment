const express = require("express");
const { getUsers, getUser, createUser } = require("../controller/user");

const router = express.Router();

router.route("/user").get(getUsers);
router.route("/user/:id").get(getUser);
router.route("/user").post(createUser);

module.exports = router;
