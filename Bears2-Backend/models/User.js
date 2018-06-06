const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userSchema = new Schema({
    /* 
    See pending orders edit status


    */
    Orders:[Orders]
})

var User = mongoose.model('User', userSchema);
module.exports = User;