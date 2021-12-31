const {users, writeUsersJson } = require("../data/data");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

let controller = {

    register: (req, res) => {
        res.render("users/register",{
            title:"Register - COFFEE SHOP"
        });
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {

            const {name, lastname, email, password} = req.body;

            let lastId = 1;
            users.forEach(user => {
                if(user.id > lastId) {
                    lastId = user.id
                }
            });

            let user = {
                id: lastId + 1,
                name: name.trim(),
                lastname: lastname.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(password, 12) ,
                rol: "ROL_USER",
                city:"",
                phone: "",
                address: "",
                zipCode: "",
                avatar: "image-avatar-default"
            }
            users.push(user);

            writeUsersJson(users);
            res.redirect("/users/login")
        } else {
            res.render("users/register", {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req, res) => {
        res.render("users/login");
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email);
            
            req.session.user = {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }
            if(req.body.remember){
                const TIME_IN_MILISECONDS = 60000
                res.cookie("userCoffeeShop", req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }
 
            //res.locals.user = req.session.user;
 
             res.redirect('/')
            
        } else{
            res.render("users/login", {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    profile: (req, res) => {
        if(req.session.user) {
            let user = users.find(user => user.id === req.session.user.id )
            res.render("users/profile", {
                user: user
            })
        } else{
            return(res.redirect("/"))
        }
    },
    editProfile: (req, res) => {

    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userCoffeeShop) {
            res.cookie("userCoffeeShop", "", {maxAge: -1})
        }
        res.redirect("/")
    }
}
module.exports = controller;