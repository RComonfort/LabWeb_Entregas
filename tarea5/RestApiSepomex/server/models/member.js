module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    department_major: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo_URL: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    password: {

      type: DataTypes.STRING,
      allowNull: false
    },
    system_role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  //One user can belong to many project
  Member.associate = function (models) {

    Member.belongsToMany(models.Project, {
      through: 'member_project',
      foreignKey: 'member_id',
      otherKey: 'project_id'
    })
  };

  //One user can have many tasks
  Member.associate = function (models) {

    Member.belongsToMany(models.Task, {
      through: 'member_task',
      foreignKey: 'member_id',
      otherKey: 'task_id'
    })
  };

  //One user can be associated to many logs
  Member.associate = function (models) {

    Member.hasMany(models.Log, {
      foreignKey: 'member_id',
      as: 'member'
    })
  };

  //One user can be the scrum master of several projects
  Member.associate = function (models) {

    Member.hasMany(models.Project, {

      foreignKey: 'project_id', 
      as: 'project'
    })
  }

  return Member;
};