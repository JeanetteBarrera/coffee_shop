const express = require("express");
const router = express.Router();

const{listProducts} = require("../controllers/adminController")
/* Ruta que renderize el panel del administrador */


/* Ruta que renderize la lista de todos los productos */
router.get("/products", listProducts); 

/* Ruta que renderiza la vista de carga de productos */


/* Ruta que se encargara de capturar la información que llega desde un formulario y guardarla en la base de datos json */


/* Ruta que renderize la vista de edición de producto, debe recibir un parametro obligatorio para identificar el producto a editar */


/* Ruta que se encargara de carturar la información que llega del formulario de edicion y actualizar la base de datos json */


/* Ruta que se encargara de eliminar un producto de la base de datos, debe recibir un parametro obligatorio para identificar a el producto */


module.exports = router;