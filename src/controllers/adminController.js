const fs = require('fs');
/*const path = require('path');*/

const { productsExtra,categories, writeProductsExtraJson, products} = require("../data/data");// requiero las propiedades y metodos.

let controller = {

    index:(req, res) => {
        res.render("admin/indexAdmin", {
            products: productsExtra,
            title:"Admin - COFFEE SHOP",
            session: req.session
        });
    },
    listProducts: (req, res) => {
        res.render("admin/productList", {
            products: productsExtra,
            title:"List - COFFEE SHOP",
            session: req.session
        });
    }, 
    create: (req, res) => {
        res.render("admin/productCreate",{
            title:"Create Product - COFFEE SHOP",
            session: req.session
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
            category: category, 
            subcategory: subcategory,
            description: description.trim(),
            price: price,
            discount: discount,
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

        let product = productsExtra.find(product => product.id === +req.params.id)

        res.render("admin/productEdit", {
            categories,
            product,
            title : "Edit Product",
            session: req.session
        })
        
    },
    updateProduct:  (req, res) => {
        
        const { name, category, subcategory, description, price, discount, preparation} = req.body;
        let productId = +req.params.id;

        productsExtra.forEach(product => {
            if(product.id === productId) {
                product.id = product.id,
                product.name = name.trim(),
                product.category = category,
                product.subcategory = subcategory,
                product.description = description.trim(),
                product.price = price,
                product.discount = discount,
                product.stock = product.stock,
                product.status = product.status
                if(req.file){
					if(fs.existsSync("./public/images/products/", product.img) && (product.img != "default-image.jpg")){  
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

                if(fs.existsSync("./public/images/products/", product.img) && (product.img != "default-image.jpg")){ 
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
	},
    status : (req, res) => {
        
        productsExtra.forEach(product => {
            if(product.id === +req.params.id) {
                if(product.status === true) {
                    product.status = false;
                } else {
                    product.status = true;
                }
            }
        })
        writeProductsExtraJson(productsExtra);
        res.redirect(`/admin/products`);
    }

}
module.exports= controller;