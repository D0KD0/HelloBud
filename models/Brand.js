const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Brand extends Model {}


Brand.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dispensary_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'dispensary',
            key: 'id',
        },
    },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'brand',
    }
  );
  
  module.exports = Brand;
  