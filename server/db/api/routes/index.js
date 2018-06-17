const router = require('express').Router();

router.use('/users', require('../controller/users'));
// router.use('/orders', require('../controller/orders'));
// router.use('/order_items', require('../controller/order_items'));


module.exports = router;