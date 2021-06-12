const models = require("../models/models");
const controller = {};

controller.Home = (req, res) => {
  res.render("Home", {
    nombrePagina: "Home",
  });
};

controller.FormularioPOST = async (req, res) => {
  const { nombre, numero } = req.body;

  const errores = [];

  if (!nombre || !numero) {
    errores.push({ texto: "VERIFICA LOS DATOS INTRODUCIDOS" });
  }

  if (errores.length > 0) {
    res.render("Home", {
      nombrePagina: "Home",
      errores,
    });
  } else {
    console.log(req.body);
    const contactos = await models.create({ nombre, numero });
    res.redirect("/");
  }
};

controller.Contactos = async (req, res) => {
  const contactos = await models.findAll();
  res.render("Contactos", {
    nombrePagina: "Contactos",
    contactosL: contactos.length,
    contactos,
  });
};

controller.Eliminar = async (req, res, next) => {
  const eliminarContacto = await models.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (!eliminarContacto) return next();
  else res.redirect("/contactos");
};

// controller.Modificar = async (req, res, next) => {
//   const modificarContacto = await models.({
//     where: {
//       id: req.params.id,
//     },
//   });

//   if (!eliminarContacto) return next();
//   else res.redirect("/contactos");
// };

controller.React = (req, res) => {
  console.log(req.body);
};

module.exports = controller;
