import * as Sequelize from "sequelize";
import db from "../config/database";
import userFactory from "./User";
import orderFactory from "./Order";
import orderItemFactory from "./OrderItem";
import foodItemFactory from "./FoodItem";

const dbInstance = db.instance;

export const User = userFactory(dbInstance);
export const Orders = orderFactory(dbInstance);
export const Order_Items = orderItemFactory(dbInstance);
export const Food_Items = foodItemFactory(dbInstance);

// const Food_Category = db.define('food_category', {
//     food_category_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     food_category_name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
// })

// Relation Definitions
Orders.hasMany(Order_Items, {
  foreignKey: { name: "orders_id", allowNull: true },
  onDelete: "CASCADE"
});
Order_Items.belongsTo(Orders, {
  foreignKey: { name: "orders_id", allowNull: true },
  onDelete: "CASCADE"
});

User.hasMany(Orders, {
  foreignKey: { name: "user_id", allowNull: true },
  onDelete: "CASCADE"
});
Orders.belongsTo(User, {
  foreignKey: { name: "user_id", allowNull: true },
  onDelete: "CASCADE"
});

Food_Items.hasMany(Order_Items, {
  foreignKey: { name: "food_items_id", allowNull: true },
  onDelete: "CASCADE"
});
Order_Items.belongsTo(Food_Items, {
  foreignKey: { name: "food_items_id", allowNull: true },
  onDelete: "CASCADE"
});

// Food_Category.hasMany(Food_Items,  {foreignKey: { name: 'food_item_id', allowNull: true}, onDelete: 'CASCADE'});
// Food_Items.belongsTo(Food_Category, { foreignKey: { name: 'food_category_id', allowNull: true }, onDelete: 'CASCADE' })

User.sync()
  .then(() => Orders.sync())
  .then(() => Food_Items.sync())
  .then(() => Order_Items.sync())
  // .then( ()=> Food_Category.sync())
  .catch(console.log);
