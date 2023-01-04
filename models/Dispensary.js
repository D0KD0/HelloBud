const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dispensary extends Model {}


Dispensary.init(
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
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      zip_code: {
        type: DataTypes.INTEGER,
      },
      // latitude and longitude
      point: {
        type: DataTypes.GEOMETRY
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'dispensary',
    }
  );
  
  module.exports = Dispensary;
  