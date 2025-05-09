import sequelize from "../db/sequelize.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define('products',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'category',
        //     key: 'id'
        // },
        // onDelete: 'CASCADE'
    },
    }, {
        freezeTableName:true,
        tableName: 'products'
    });



export default Product;
