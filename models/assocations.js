import Category from "./category.js"
import Product from "./product.js"
import Order from "./Order.js";
import sequelize from "../db/sequelize.js";
import User from "./User.js";

Category.hasMany(Product,{foreignKey:'categoryId'});
Product.belongsTo(Category,{foreignKey:'categoryId'});
Order.belongsTo(User,{foreignKey:'userId'})
sequelize.sync()
    .then(()=> console.log('Models synced'))
    .catch(err => console.error("Sync failed:", err))
export {Category,Product};
