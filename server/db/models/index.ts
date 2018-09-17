import * as Sequelize from "sequelize";
import db from "../config/database";

// Table Definitions

export const User = db.define("user", {
  // user_id: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  // },
  fName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  userType: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

export const Orders = db.define("orders", {
  // order_id: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  // },
  order_details: {
    type: Sequelize.STRING,
    allowNull: true
  },
  order_date_ordered: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

export const Order_Items = db.define("order_items", {
  // order_item_id: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  // },
  order_item_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  order_item_price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  order_item_details: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

export const Food_Items = db.define("food_items", {
  // food_item_id: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  // },
  food_name: {
    type: Sequelize.STRING,
    allowNull: false
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
    allowNull: false
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
