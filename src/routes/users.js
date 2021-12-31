const express = require('express');
const router = express.Router();
const {register, login, processRegister, processLogin, profile, editProfile, logout} = require("../controllers/userControllers")

const uploadAvatar = require("../middlewares/uploadAvatarFile")
/* Validaciones*/
const loginValidator = require("../validations/loginValidator")
const registerValidator = require("../validations/registerValidator");

router.get("/register", register);
router.post("/register", registerValidator, processRegister)

router.get("/login", login);
router.post("/login", loginValidator, processLogin)

router.get("/logout", logout);
router.get("/profile", profile);

router.put("/profile/:id",/* uploadAvatar.single(),*/ editProfile);

module.exports = router;