const express = require("express");
const router = express.Router();
const controller = require("../controllers/addressController");

//mostra todos os endereços no sistema
router.get("/", controller.getAddressAll)

//traz todos os endereços do usuario pesquisado pelo id
router.get("/UserId/:id", controller.getAddress)

//me retorna um endereço só pesquisado pelo id
router.get("/:id", controller.getAddressPk)

router.post("/:id", controller.createAddress);

router.put("/:id", controller.updateAddress)

router.delete("/:id", controller.deleteAddress)


module.exports = router;