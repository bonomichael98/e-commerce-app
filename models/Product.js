const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    name:{
        type:DataTypes.STRING,allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,allowNull: false,
        validate :{
            isDecimal: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references : {
            model: 'category',key: 'id'
        }
    },
    id: {
        type: DataTypes.INTEGER,allowNull: false,primaryKey: true,autoIncrement: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;