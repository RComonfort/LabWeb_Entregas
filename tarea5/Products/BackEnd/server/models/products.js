'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    codigo: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    exist: DataTypes.INTEGER
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};