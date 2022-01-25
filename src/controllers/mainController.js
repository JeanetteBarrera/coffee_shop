let controller = {
    index: (req, res) => {
        res.render('products/home', {
            title:"Home - COFFEE SHOP",
            session: req.session
        })
    }, 
    contact: (req, res) => {
        res.send("lala")
    }
}
module.exports= controller;