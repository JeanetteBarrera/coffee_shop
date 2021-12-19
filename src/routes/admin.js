const express = require("express");
const router = express.Router();
const upload = require('../middlewares/uploadProductFile');

const {index, listProducts, create, addProduct, edit, updateProduct, deleteProduct, status} = require("../controllers/adminController");


//esta petición devuelve la vista del panel del administrador
router.get("/", index);
router.get("/products", listProducts); // esta petición devuelve la vista de listar de todos los productos

router.get("/product", create); // esta petición devuelve la vista del formulario de carga de productos
router.post("/product", upload.single('img'), addProduct); //esta petición crea un nuevo producto no devuelve nada

router.get("/product/:id", edit); // esta petición devuelve la vista del formulario de edición de productos, requiere un parametro obligatorio
router.put("/product/:id",upload.single('img'), updateProduct); //actualiza producto no devuelve nada

router.delete("/product/:id", deleteProduct); //elimina producto

router.patch("/product/:id", status); //modifica el estatus del producto
module.exports = router;