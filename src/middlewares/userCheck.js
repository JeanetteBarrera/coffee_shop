function userCheck(req, res, next) {
    if(req.session.user && req.session.user.rol ==="ROL_USER") {
        next();
    }else {
        res.redirect("/")
    }
}