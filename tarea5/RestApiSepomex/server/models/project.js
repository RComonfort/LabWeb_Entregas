'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    vision: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    begin_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    background: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    risks: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    reach:{
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});

  Project.associate = function (models) {

    Project.belongsToMany(models.Member, {
      through: 'member_project',
      foreignKey: 'project_id',
      otherKey: 'member_id'
    })
  };

  Project.associate = function (models) {

    Project.belongsToMany(models.Technology, {
      through: 'project_technology',
      foreignKey: 'project_id',
      otherKey: 'technology_id'
    })
  };

  Project.associate = function (models) {
    Project.hasMany(models.User_story, {
      foreignKey: 'project_id',
      as: 'project'
    })
  };

  Project.associate = function (models) {

    Project.belongsTo(models.Member, {

      foreignKey: 'scrum_master_id',
      as: 'scrum_master'
    })
  }

  return Project;
};