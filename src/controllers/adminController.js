const fs = require('fs');
const path = require('path');

const { productsExtra,categories, writeProductsExtraJson} = require("../data/data");// requiero las propiedades y metodos.

let controller = {

    index:(req, res) => {
        res.render("admin/indexAdmin", {
            products: productsExtra,
            title: "Admin"
        });
    },
    listProducts: (req, res) => {
        res.render("admin/productList", {
            products: productsExtra,
            title: "List products"
        });
    }, 
    create: (req, res) => {
        res.render("admin/productCreate",{
            title: "Create Product"
        });
    }, 
    addProduct: (req, res) => {
        const { name, category, subcategory, description, price, discount, preparation} = req.body;
        //definimos id, recorremos todo en array de objetos para capturar el ultimo id creado
        let lastId = 1;
        productsExtra.forEach(product => {
            if(product.id > lastId) {
                lastId = product.id
            }
        });

        let newProduct = {
            id: lastId + 1,
            name: name.trim(),
            category: category.trim(), 
            subcategory: subcategory.trim(),
            description: description.trim(),
            price: price.trim(),
            discount: discount.trim(),
            status: true,
            stock: 20,
            img: req.file ? req.file.filename : "default-image.jpg",
            preparation: preparation.trim()
        }
        productsExtra.push(newProduct);
        writeProductsExtraJson(productsExtra);
        res.redirect(`/admin/products`);
    }, 
    edit: (req, res) => {

        let productId = +req.params.id;
        let product = productsExtra.find(product => product.id === productId );

        res.render("admin/productEdit", {
            product,
            categories,
            title : "Edit Product"
        });
    },
    updateProduct:  (req, res) => {
        
        const { name, category, subcategory, description, price, discount, preparation} = req.body;
        let productId = +req.params.id;

        productsExtra.forEach(product => {
            if(product.id === productId) {
                product.id = product.id,
                product.name = name.trim(),
                product.category = category.trim(),
                product.subcategory = subcategory.trim(),
                product.description = description.trim(),
                product.price = price.trim(),
                product.discount = discount.trim(),
                product.stock = product.stock,
                product.status = product.status
                if(req.file){
					if(fs.existsSync("./public/images/products/", product.img)){  
						fs.unlinkSync(`./public/images/products/${product.img}`)
					}
					product.img = req.file.filename
				}else{
                    product.img = product.img
				}
                product.preparation = preparation.trim()
            }
        })
        writeProductsExtraJson(productsExtra);
        res.redirect(`/admin/products`);
    },
    deleteProduct:  (req, res) => {

        let productId = +req.params.id;

		productsExtra.forEach(product => {

			if(product.id === productId){

                if(fs.existsSync("./public/images/products/", product.img)){ 
                    fs.unlinkSync(`./public/images/products/${product.img}`)
				}
                let productDeleteIndex = productsExtra.indexOf(product)
				
				if(productDeleteIndex !== -1) {
				    productsExtra.splice(productDeleteIndex, 1)
				} 
			}
		})

		writeProductsExtraJson(productsExtra)
		res.redirect('/admin/products');
	}
}
module.exports= controller;