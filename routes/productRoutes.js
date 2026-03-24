const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductsById);

router.post('/', productController.postProducts);

router.put('/:id', productController.editProducts);

router.delete('/:id', productController.deleteProducts);

module.exports = router;