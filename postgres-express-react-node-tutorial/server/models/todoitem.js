'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    todoItemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  /*TodoItem.associate = (models) => {
    TodoItem.belongsToMany (models.Todo, {
      as: 'Todos', through: models.linkTable, foreignKey: 'todoItemId', onDelete: 'CASCADE',
    });
  }*/

  /*TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };*/

  return TodoItem;
};
