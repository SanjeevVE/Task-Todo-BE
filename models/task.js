'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
        allowNull: false,
        defaultValue: 'pending',
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      paranoid: true, 
      timestamps: true, 
    }
  );

  return Task;
};
