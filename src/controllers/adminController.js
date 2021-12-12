const fs = require('fs');
const path = require('path');

const { productsExtra,categories, writeProductsExtraJson} = require("../data/data");// requiero las propiedades y metodos.

let controller = {
    /* Renderiza la vista del panel de control */
    index:(req, res) => {
        res.send("Panel del Administrador")
    },
    /* Renderiza la vista de listar productos */
    listProducts: (req, res) => {
        res.render("admin/productList", {
            products: productsExtra,
            title: "List products"
        });
    }, 
    /* Renderiza la vista de carga de productos */
    create: (req, res) => {
        res.send("Formulario de carga de producto")
    }, 
    /* Metodo que se encarga de capturar toda la información que llega del formulario  y guardar un nuevo producto en la base de datos json*/
    addProduct: (req, res) => {
        
    }, 
    /* Renderiza la vista de edicion de productos, recibe un parametro id*/
    edit: (req, res) => {
        res.send(`Formulario de edición de producto: ${req.params.id}`)

    },
    /* Metodo que se encarga de capturar toda la información que llega del formulario de edición y actualizar la información en la base de datos json*/
    updateProduct:  (req, res) => {
        
    },
    /*  */
    deleteProduct:  (req, res) => {

	}
}
module.exports= controller;