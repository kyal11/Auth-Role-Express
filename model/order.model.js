import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Products from "./product.model.js";
import Users from "./user.model.js";

const {DataTypes} = Sequelize;

const Orders = db.define('order', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    }
},{
    freezeTableName: true
});

Orders.belongsTo(Users, {foreignKey: 'user_id'});
Orders.belongsTo(Products, {foreignKey: 'product_id'});


export default Orders;