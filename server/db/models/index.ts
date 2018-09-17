import * as Sequelize from "sequelize";
import db from "../config/database";

const dbInstance = db.instance;

export interface IUser {
  fName: string;
  lName: string;
  username: string | null;
  email: string;
  password: string;
  image: string;
  userType: number;
}

// Table Definitions
export const User = dbInstance.define<IUser, {}>("user", {
  fName: {
    type: Sequelize.STRING,
  },
  lName: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  userType: {
    type: Sequelize.INTEGER,
  }
});

export interface IOrder {
  order_date_ordered: Date,
  order_details?: string;
}

export const Orders = dbInstance.define<IOrder, {}>("orders", {
  order_details: {
    type: Sequelize.STRING,
    allowNull: true
  },
  order_date_ordered: {
    type: Sequelize.DATE,
  }
});

export interface IOrderItem {
  order_item_quantity: number;
  order_item_price: string;
  order_item_details?: string;

}
export const Order_Items = dbInstance.define<IOrderItem, {}>("order_items", {
  order_item_quantity: {
    type: Sequelize.INTEGER,
  },
  order_item_price: {
    type: Sequelize.STRING,
  },
  order_item_details: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

export interface IFoodItem {
  food_name: string;
  food_details?: string;
  food_price?: number;
  food_category_name: string;
}
export const Food_Items = dbInstance.define<IFoodItem, {}>("food_items", {
  food_name: {
    type: Sequelize.STRING,
  },
  food_details: {
    type: Sequelize.STRING,
    allowNull: true
  },
  food_price: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  food_category_name: {
    type: Sequelize.STRING,
  }
});

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
Orders.hasMany(Order_Items, { foreignKey: { name: "orders_id", allowNull: true }, onDelete: "CASCADE" });
Order_Items.belongsTo(Orders, { foreignKey: { name: "orders_id", allowNull: true }, onDelete: "CASCADE" });

User.hasMany(Orders, { foreignKey: { name: "user_id", allowNull: true }, onDelete: "CASCADE" });
Orders.belongsTo(User, { foreignKey: { name: "user_id", allowNull: true }, onDelete: "CASCADE" });

Food_Items.hasMany(Order_Items, { foreignKey: { name: "food_items_id", allowNull: true }, onDelete: "CASCADE" });
Order_Items.belongsTo(Food_Items, { foreignKey: { name: "food_items_id", allowNull: true }, onDelete: "CASCADE" });

// Food_Category.hasMany(Food_Items,  {foreignKey: { name: 'food_item_id', allowNull: true}, onDelete: 'CASCADE'});
// Food_Items.belongsTo(Food_Category, { foreignKey: { name: 'food_category_id', allowNull: true }, onDelete: 'CASCADE' })

User.sync()
  .then(() => Orders.sync())
  .then(() => Food_Items.sync())
  .then(() => Order_Items.sync())
  // .then( ()=> Food_Category.sync())
  .catch(console.log);
