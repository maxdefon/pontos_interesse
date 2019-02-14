const POIs = require('../models/POIs');

class ListByCoordinatesService{

  constructor(data){
    this._coordinateX = parseInt(data.coordinateX);
    this._coordinateY = parseInt(data.coordinateY);
    this._maxDistance = parseInt(data.maxDistance) * 100000;
  }

  async getResult(){
    let query = await POIs.find({
      location: {
        $near: {
          $geometry: {
             type: 'Point' ,
             coordinates: [ this._coordinateX, this._coordinateY]
          },
          $maxDistance: this._maxDistance,
        }
      }
    })
    return query;
  }

}

module.exports = ListByCoordinatesService;