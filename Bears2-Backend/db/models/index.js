const Sequelize = require('sequelize');
const db = require('../config/database');

// Table Definitions

const User = db.define('user', {
  fName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  userType: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Orders= db.define('orders', {
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  order_details: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order_date_ordered: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

const Order_Items = db.define('order_items', {
  order_item_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  order_item_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  order_item_price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order_item_details: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

// Relation Definitions
Orders.hasMany(Order_Items, { foreignKey: { name: 'order_id', allowNull: true }, onDelete: 'CASCADE' });
Order_Items.belongsTo(Orders, { foreignKey: { name: 'order_id', allowNull: true }, onDelete: 'CASCADE' });



module.exports = {
  User,
  Order_Items,
  Orders
};
