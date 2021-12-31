function userAdminCheck(req, res, next) {
    if(req.session.user.rol == "USER_ADMIN") {
        next();
    }else {
        res.redirect("/")
    }
}