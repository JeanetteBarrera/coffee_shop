const express = require("express");
const router = express.Router();
const upload = require('../middlewares/uploadProductFile');

const {index, listProducts, create, addProduct, edit, updateProduct, deleteProduct} = require("../controllers/adminController");


//router.get("/", profile); //esta petición devuelve la vista del perfil de administrador
router.get("/", index);
router.get("/products", listProducts); // esta petición devuelve la vista de listar de todos los productos

router.get("/product", create); // esta petición devuelve la vista del formulario de carga de productos
router.post("/product", upload.single('img'), addProduct); //esta petición crea un nuevo producto no devuelve nada

router.get("/product/:id", edit); // esta petición devuelve la vista del formulario de edición de productos, requiere un parametro obligatorio
router.put("/product/:id",upload.single('img'), updateProduct); //actualiza producto no devuelve nada

router.delete("/product/:id", deleteProduct); //elimina producto


module.exports = router;