const router = require('express').Router();
const db = require('../../models/index');

router.post('/adduser', async (req, res) => {
  console.log('this is the body', req.body)

    try {
      console.log("hi am i even getting in here");
      const user = await db.User.findOne({ where: { email: req.body.email } });
      if (user) {
        console.log('This email exist, please enter a new email address');
        res.status(404).send('That email is taken. Please try another email.');
      } else {
        console.log('this is the body', req.body)
        const newUser = await db.User.create({
          email: req.body.email.toLowerCase(),
          password: req.body.password,
          userType: 1,
          fName: req.body.fName,
          lName: req.body.lName,
          username: req.body.username,
          image: req.body.image,
        });
        console.log('Signed Up New User: ', { user: newUser });
        res.status(201).send({ user: newUser });
      }
    } catch (error) {
      console.log('Error creating Users', error);
      res.status(500).send(error);
    }
});

module.exports = router;