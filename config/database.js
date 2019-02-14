const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/base');

module.exports = (mongoose);