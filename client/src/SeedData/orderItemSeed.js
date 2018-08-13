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

export default {
  models: 'foodItems',
  data: [
    {
      id: '001',
      category: 'Soup',
      courseType: 'courseOne',
      title: 'Rice Soup',
      image:'https://skinnyms.com/wp-content/uploads/2012/11/Slow-Cooker-Cream-of-Chicken-and-Rice-Soup.jpg',
      quantity: 0,
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
      image:'https://images.food52.com/8zQkN7Qz2l7HKpmnff_rBeKk1kA=/753x502/e74d10ff-464a-472f-ad22-98b6414a0326--Wonton_Soup_Recipe_Banner.jpg',
      quantity: 0,
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
      image:'https://www.gimmesomeoven.com/wp-content/uploads/2011/02/african-peanut-soup2.jpg',
      quantity: 0,
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
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-crgwmyK-B3fFWwCodLwJ_VgEjh-i_mUArnINKpR_wW6V6skhrQ',
      quantity: 0,
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
      image:'https://www.inspiredtaste.net/wp-content/uploads/2014/01/Roasted-Sweet-Potato-Fries-Recipe-2-1200.jpg',
      quantity: 0,
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
      image:'http://www.recipe4living.com/assets/itemimages/400/400/3/default_24bf9346d44b856e7ea055a02accd97d_copycat%20arbys%20curly%20fries%20dreamstime_s_39229405.jpg',
      quantity: 0,
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
      image:'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fsl%2F08%2F03%2Fchicken-tenders-sl-1713121-x.jpg%3Fitok%3DuZ8Irjwz&w=800&q=85',
      quantity: 0,
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
      image:'https://img.taste.com.au/h8ezN6PQ/w720-h480-cfill-q80/taste/2016/11/fast-food-fried-chicken-108893-1.jpeg',
      quantity: 0,
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
      image:'https://media.longhornsteakhouse.com/en_us/images/product/l-steakhouse-grilled-chicken-sandwich-dpv-7-19-17.jpg',
      quantity: 0,
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
      image:'https://www.seriouseats.com/recipes/images/2013/04/20130416-grilled-cheese-variations-2-10.jpg',
      quantity: 0,
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
      image:'http://www.bakespace.com/images/large/05d4d74893775bed7c54014b662d843f.jpeg',
      quantity: 0,
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
      image:'https://hips.hearstapps.com/del.h-cdn.co/assets/17/12/1024x664/gallery-1490206019-big-mac-beauty.jpg?resize=980:*',
      quantity: 0,
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
      image:'https://images.britcdn.com/wp-content/uploads/2014/04/bottoms-up-irish-sundae.jpg?w=1000&auto=format',
      quantity: 0,
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
      image:'https://www.onceuponachef.com/images/2017/12/NY-Cheesecake-768x580.jpg',
      quantity: 0,
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
      image:'https://www.mexicanplease.com/wp-content/uploads/2017/05/beef-cheese-empanadas-after-cooking-taking-bite.jpg',
      quantity: 0,
      price: {
        adult: 5.99,
        kid: 3.99
      },
      description: 'Ipsum lorem trinity quantum tandem pro quo salem',
      likes: 189,
      starRating: 4.5,
      reviews: 1072,
    },
  ],
}