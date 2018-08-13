const router = require('express').Router();
const db = require('../../models/index');


router.post('/', async (req, res) => {
    console.log('this is the body', req.body)

    try {
        const food_item = await db.Food_Items.findOne({ where: { food_name: req.body.food_name } });
        if (food_item) {
            console.log('This food category exist, please enter a food category');
            res.status(404).send('That food category exist. Please try another food category.');
        } else {
            console.log('this is the body', req.body)
            const foodItem = await db.User.create({
                food_name: req.body.food_name,
                food_details: req.body.food_details,
                food_price: req.body.food_price,
                food_category_name: req.body.food_category_name,
            });
            // console.log('Signed Up New User: ', { user: newUser });
            res.status(201).send({ food_item: foodItem });
        }
    } catch (error) {
        console.log('Error creating food_category', error);
        res.status(500).send(error);
    }
});

router.get('/:food_category_name', async(req, res) => {
    try {
        console.log('this is req.params', req.params)
        const allFoodItems = await db.Food_Items.findAll({ where: { food_category_name: req.params.food_category_name} });
        console.log('this is the user', allFoodItems);
        if(allFoodItems) {
            console.log('User Logged In: ', {user: user, id_token: util.hasher(`${req.params.email}`)});
            res.status(200).send({food_items: allFoodItems});
        } else {
            res.status(404).send('there are no food items for this category');
        }
    }
    catch (error) {
        console.log('Error in fetch food items',error);
        res.status(500).send(error);
    }


});



module.exports = router;