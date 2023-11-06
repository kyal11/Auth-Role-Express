import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Users from "./user.model.js"

const {DataTypes} = Sequelize 

const Products = db.define('product', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
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

export default Products