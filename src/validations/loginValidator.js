const bcrypt = require("bcryptjs");
const {check, body } = require("express-validator");
const {users} = require("../data/data");

module.exports = [

    check("email")
    .notEmpty()
    .withMessage("email is required").bail()
    .isEmail()
    .withMessage("email is valid"),

    check("password")
    .notEmpty()
    .withMessage("password is required"),

    body("password")
    .custom((value, {req}) => {
        
        let user = users.find( user => user.email == req.body.email);

        if(user) {
            if(bcrypt.compareSync(value, user.password) ) {
                return true;
            } else {
                return false
            }
            
        } else {
            return false;
        }
    }).withMessage("invalid credentials")
]