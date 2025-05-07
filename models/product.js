import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";

const Product = sequelize.define('Product',{
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
        references: {
            model: Category,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    }
)

// Product.belongsTo(Category, {foreignKey:'categoryId'});
// Category.hasMany(Product, { foreignKey:'categoryId'})

export default Product;
