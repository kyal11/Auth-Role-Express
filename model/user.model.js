import { Sequelize } from "sequelize";
import db from "../config/db"

const Datatypes = { Sequelize }

const Users = db.define('user', {
    uuid:{
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    name:{
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    role:{
        type: Datatypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    }
}, {
    freezeTableName: true
})

module.exports = Users