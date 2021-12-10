const fs = require("fs");
const path = require("path");

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    productsExtra: JSON.parse(fs.readFileSync(path.join(__dirname, "/products1.json"), "utf-8")),
    categories:  JSON.parse(fs.readFileSync(path.join(__dirname, "/categories.json"), "utf-8")),
    
    writeProductsJson : (data) => {
        fs.writeFileSync(path.join(__dirname, "../data/products.json"), JSON.stringify(data), "utf-8"); 
    },
    writeProductsExtraJson : (data) => {
        fs.writeFileSync(path.join(__dirname, "../data/products1.json"), JSON.stringify(data), "utf-8"); 
    },
}