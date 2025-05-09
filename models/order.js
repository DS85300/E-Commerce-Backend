import sequelize from "../db/sequelize.js";
import { DataTypes} from "sequelize";
import User from './User.js'

const Order = sequelize.define('Order',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true, 
    },
    userId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'User',
            key:'id',
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'pending',
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:1,
    },
},{
    timestamps: true,
});

export default Order;
