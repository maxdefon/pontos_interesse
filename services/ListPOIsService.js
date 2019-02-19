const POIs = require('../models/POIs');

class ListPOIsService{

  async dataPOIs() {
    const query = await POIs.find().sort({"name": 1});
    return query
  }

}
module.exports = ListPOIsService;