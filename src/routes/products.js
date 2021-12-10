const express = require("express");
const router = express.Router();

const {listProduct, detailProduct, searchProduct } = require("../controllers/productController");


router.get("/all", listProduct); //devuelve lista de productos
router.get("/:id", detailProduct); //devuelve un detalle de producto

router.get("/:query?", searchProduct); // devuelve productos relacionados con lo ingresado en el buscador

/*==== PRODUCTOS EN TIENDA =====*/

module.exports = router;