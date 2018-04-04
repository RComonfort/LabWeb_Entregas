'use strict';
module.exports = (sequelize, DataTypes) => {
  var sepomex = sequelize.define('Sepomex', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idestado: DataTypes.INTEGER,
    estado: DataTypes.TEXT,
    idmunicipio: DataTypes.INTEGER,
    municipio: DataTypes.TEXT,
    ciudad: DataTypes.TEXT,
    zona: DataTypes.TEXT,
    cp: DataTypes.INTEGER,
    asentamiento: DataTypes.TEXT,
    tipo: DataTypes.TEXT
  }, {});
  sepomex.associate = function(models) {
    // associations can be defined here
  };
  return sepomex;
};