const fs = require('fs');
const path = require('path');

const { productsExtra,categories, writeProductsExtraJson} = require("../data/data");// requiero las propiedades y metodos.

let controller = {

    index:(req, res) => {
        res.send("Home")
    },
    listProducts: (req, res) => {
        res.send("Home")
    }, 
    create: (req, res) => {
        res.send("Home")
    }, 
    addProduct: (req, res) => {
        res.send("Home")
    }, 
    edit: (req, res) => {
        res.send("Home")
    },
    updateProduct:  (req, res) => {
        
        res.send("Home")
    },
    deleteProduct:  (req, res) => {
        res.send("Home")
    }
}
module.exports= controller;