const mongoose = require('mongoose');
const winston = require('winston');

module.exports = () => {
    mongoose.connect('mongodb+srv://Shahid:123@cluster0.9tdujaw.mongodb.net/curd?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }).then(() => winston.info('MongoDb connected successfuly...'));
}