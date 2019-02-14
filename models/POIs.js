const mongoose = require('../config/database');

const POIsSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {String},
    coordinates:[Number]
  }
});

POIsSchema.index({ location: "2dsphere" });

const POIs = mongoose.model('POIs', POIsSchema);

module.exports = POIs;