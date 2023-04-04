const express = require("express");
const router = express.Router();
const controller = require("../controllers/addressController");
const authMiddleware = require("../middlewares/auth")
//mostra todos os endereços no sistema
router.get("/", controller.getAddressAll)

//traz todos os endereços do usuario pesquisado pelo id
router.get("/UserId/:id", controller.getAddress)

//me retorna um endereço só pesquisado pelo id
router.get("/:id", controller.getAddressPk)

router.post("/:id",authMiddleware.verifyToken, controller.createAddress);

router.put("/:id",authMiddleware.verifyToken, controller.updateAddress)

router.delete("/:id",authMiddleware.verifyToken, controller.deleteAddress)


module.exports = router;