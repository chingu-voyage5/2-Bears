// const router = require('express').Router();
// const db = require('../../models/index');
//
//
// router.post('/', async (req, res) => {
//     console.log('this is the body', req.body)
//
//     try {
//         const food_category = await db.User.findOne({ where: { food_category_name: req.body.food_category_name } });
//         if (food_category) {
//             console.log('This food category exist, please enter a food category');
//             res.status(404).send('That food category exist. Please try another food category.');
//         } else {
//             console.log('this is the body', req.body)
//             const foodCategory = await db.User.create({
//                 food_category_name: req.body.food_category_name,
//             });
//             // console.log('Signed Up New User: ', { user: newUser });
//             res.status(201).send({ food_category_name: foodCategory });
//         }
//     } catch (error) {
//         console.log('Error creating food_category', error);
//         res.status(500).send(error);
//     }
// });
//
// router.get('/:email/:password', async(req, res) => {
//     try {
//         console.log('this is req.params', req.params)
//         const user = await db.User.findOne({ where: { email: req.params.email} });
//         console.log('this is the user', user);
//         const data = await bcrypt.compare(req.params.password, user.password)
//         if(data) {
//             console.log('User Logged In: ', {user: user, id_token: util.hasher(`${req.params.email}`)});
//             res.status(200).send({user: user, id_token: util.hasher(req.params.email)});
//         } else {
//             res.status(404).send('Credentials are incorrect')
//         }
//     }
//     catch (error) {
//         console.log('Error in fetch User',error);
//         res.status(500).send(error);
//     }
//
//
// });
//
//
//
// module.exports = router;