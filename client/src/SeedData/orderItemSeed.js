// const Order_Items = db.define('order_items', {
//  order_item_id: {
//    type: Sequelize.INTEGER,
//    allowNull: false,
//  },
//  order_item_quantity: {
//    type: Sequelize.INTEGER,
//    allowNull: false,
//  },
//  order_item_price: {
//    type: Sequelize.STRING,
//    allowNull: false,
//  },
//  order_item_details: {
//    type: Sequelize.STRING,
//    allowNull: false,
//  },
// })

export default [
    {
      // models: 'foodItems',
      // data: {}
      id: '001',
      category: 'Soup',
      courseType: 'courseOne',
      title: 'Rice Soup',
      quantity: {
        adultQuantity: 75,
        kidQuantity: 25,
        totalQuantity: this.adultQuantity + this.kidQuantity,
      },
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Phasellus posuere lectus vel mattis bibendum. Aliquam vulputate quis mi vitae sodales. Nulla vel luctus quam.',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '002',
      category: 'Soup',
      courseType: 'courseOne',
      title: 'Wanton Soup',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '003',
      category: 'Soup',
      courseType: 'courseOne',
      title: 'Peanut Soup',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '004',
      category: 'Sides',
      courseType: 'courseTwo',
      title: 'Regular Fries',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '005',
      category: 'Sides',
      courseType: 'courseTwo',
      title: 'Sweet Potato Fries',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '006',
      category: 'Sides',
      courseType: 'courseTwo',
      title: 'Curly Fries',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '007',
      category: 'Chicken',
      courseType: 'courseThree',
      title: 'Chicken Tenders',
      quantity: 70,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '008',
      category: 'Chicken',
      courseType: 'courseThree',
      title: 'Fried Chicken',
      quantity: 30,
      price: {
        adult: 6.99,
        kid: 4.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '009',
      category: 'Chicken',
      courseType: 'courseThree',
      title: 'Grilled Chicken Sandwhich',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '010',
      category: 'Beef',
      courseType: 'courseFour',
      title: 'Grilled Cheese Burger',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '011',
      category: 'Beef',
      courseType: 'courseFour',
      title: 'Double Cheese Burger',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '012',
      category: 'Beef',
      courseType: 'courseFour',
      title: 'Big Mac',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '013',
      category: 'Dessert',
      courseType: 'courseFive',
      title: 'Ice Cream Sundae',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '014',
      category: 'Dessert',
      courseType: 'courseFive',
      title: 'Cheesecake',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
    {
      id: '015',
      category: 'Dessert',
      courseType: 'courseFive',
      title: 'Empanada',
      quantity: 100,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
  ]