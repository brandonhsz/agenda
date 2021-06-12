const Sequelize = require("sequelize");
const db = require("../config/db");

const Contactos = db.define("contactos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: Sequelize.STRING,
  },

  numero: {
    type: Sequelize.STRING,
  },
});

module.exports = Contactos;
