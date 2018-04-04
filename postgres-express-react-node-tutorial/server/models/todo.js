'use strict';

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    todoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  /*Todo.associate = (models) => {
    Todo.belongsToMany (models.Todo, {
      as: 'TodoItems', through: models.linkTable, foreignKey: 'todoId',onDelete: 'CASCADE',
    });
  }*/

  /*Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };*/

  return Todo;
};
