module.exports =  {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://user:pass@localhost:port/database', function() {
        console.log('Server has connected')

    });
}
