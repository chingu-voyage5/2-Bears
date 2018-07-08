const Sequelize = require('sequelize');
const db = require('../config/database');

// Table Definitions

const User = db.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
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
      primaryKey: true,
      autoIncrement: true,
  },
  order_details: {
    type: Sequelize.STRING,
    allowNull: true,
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
      primaryKey: true,
      autoIncrement: true,
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
    allowNull: true,
  },
});

const Food_Items = db.define('food_items', {
    food_item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    food_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    food_details: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    food_price: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
})



// Relation Definitions
Orders.hasMany(Order_Items, { foreignKey: { name: 'order_id', allowNull: true }, onDelete: 'CASCADE' });
Order_Items.belongsTo(Orders, { foreignKey: { name: 'order_id', allowNull: true }, onDelete: 'CASCADE' });
Order_Items.hasOne(Food_Items, { foreignKey: { name: 'order_item_id', allowNull: true }, onDelete: 'CASCADE' });

Food_Items.hasMany(Order_Items, { foreignKey: { name: 'order_id', allowNull: true }, onDelete: 'CASCADE' });

Orders.belongsTo(User, {foreignKey: {name: 'user_id', allowNull: true}, onDelete: 'CASCADE'});
User.hasMany(Orders,{foreignKey: {name: 'user_id', allowNull: true}, onDelete: 'CASCADE'});



User.sync()
    .then( ()=> Orders.sync())
    .then( ()=> Order_Items.sync())
    .then( ()=> Food_Items.sync())
    .catch( err => console.log(err))


module.exports = {
    User,
    Order_Items,
    Orders,
    Food_Items
};
