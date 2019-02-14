const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/base');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = (mongoose);