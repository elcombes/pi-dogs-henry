const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('temperament', {
    nombre: {
      type: DataTypes.STRING,
    }
  })
}