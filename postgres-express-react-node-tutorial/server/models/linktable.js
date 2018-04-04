'use strict';
module.exports = (sequelize, DataTypes) => {
  var LinkTable = sequelize.define('LinkTable', {
    todoItemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    todoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    }
  }, {});

  LinkTable.associate = function(models) {
    // associations can be defined here
  };
  return LinkTable;
};