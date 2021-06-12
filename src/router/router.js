const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
const { body } = require("express-validator/check");

router.get("/", controller.Home);
router.get("/contactos", controller.Contactos);
router.get("/eliminar/:id", controller.Eliminar);
// router.get("/modificar/:id", controller.Modificar);
//modificar despues
router.get("/react", controller.React);

router.post(
  "/formulario",
  body("nombre").not().isEmpty().trim().escape(),
  body("numero").not().isEmpty().trim().isNumeric().escape(),
  controller.FormularioPOST
);

module.exports = router;
