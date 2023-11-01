import { Sequelize } from "sequelize";
import db from "../config/db"
import Users from "./user.model"
const Datatypes = { Sequelize }

const Products = db.define('product', {
    uuid:{
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    qty: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    user_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    }
}, {
    freezeTableName: true
})

Users.hasMany(Products)
Products.belongsTo(Users, {foreignKey: 'user_id'})

module.exports = Products