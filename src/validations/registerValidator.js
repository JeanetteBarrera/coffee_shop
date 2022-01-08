const {check, body } = require("express-validator");
const {users} = require("../data/data");

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("name is required"),

    check("lastname")
    .notEmpty()
    .withMessage("lastname is required"),

    check("email")
    .isEmail()
    .withMessage("email is required"),

    body("email").custom( value => {
        let user = users.find( user =>  user.email == value)

        if(user) {
            return false;
        } else {
            return true;
        }password
    }).withMessage("email is already registered"),

    check("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength(8)
    .withMessage("8 characters must be entered"),


    body("password2").custom( (value, {req}) => value !== req.body.password ? false : true)
    .withMessage("password do not match")

]