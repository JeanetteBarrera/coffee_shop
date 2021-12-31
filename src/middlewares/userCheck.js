function userAdminCheck(req, res, next) {
    if(req.session.user.rol == "USER") {
        next();
    }else {
        res.redirect("/")
    }
}