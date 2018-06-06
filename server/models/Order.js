const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    /*
    Status: Order. Scanned. Received.
     Meals: max 3
    */

})

var Order = mongoose.model('Order', orderSchema);
module.exports = Order;