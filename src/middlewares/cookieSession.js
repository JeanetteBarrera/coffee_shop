function cookieSession(req, res, next) {
    if(req.cookies.userCoffeeShop){
        req.session.user = req.cookies.userCoffeeShop
        res.locals.user = req.session.user
    }
    next()
}
module.exports = cookieSession;