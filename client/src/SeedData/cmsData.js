export default initialState=[
    {id: '000',
    category: 'Soup',
    image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
    courseType: 'courseOne',
    title: 'Rice Soup',
    description:'this is the best soup',
    quantity: {
      adultQuantity: 75,
      kidQuantity: 25,
      totalQuantity: this.adultQuantity + this.kidQuantity,
    },
    price: {
      adult: 5.99,
      kid: 3.99
    }
  },
  {id: '001',
  category: 'food',
  image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
  courseType: 'courseOne',
  title: 'Rock Soup',
  description:'this is the best soup',
  quantity: {
    adultQuantity: 75,
    kidQuantity: 25,
    totalQuantity: this.adultQuantity + this.kidQuantity,
  },
  price: {
    adult: 5.99,
    kid: 3.99
  }
},
{id: '002',
category: 'Soup',
image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
courseType: 'courseOne',
title: 'Chicken Soup',
description:"this is the best soup i've ever tried",
quantity: {
  adultQuantity: 75,
  kidQuantity: 25,
  totalQuantity: this.adultQuantity + this.kidQuantity,
},
price: {
  adult: 5.99,
  kid: 3.99
}
},
{id: '003',
category: 'pickle',
image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
courseType: 'courseOne',
title: 'Pepperoni pizza',
description:'this is the best soup in the world',
quantity: {
adultQuantity: 75,
kidQuantity: 25,
totalQuantity: this.adultQuantity + this.kidQuantity,
},
price: {
adult: 5.99,
kid: 3.99
}
},
]