let controller = {
    index: (req, res) => {
        res.render('products/home')
    }, 
    contact: (req, res) => {
        res.send("lala")
    }
}
module.exports= controller;