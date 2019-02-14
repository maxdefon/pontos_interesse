const POIs = require('../models/POIs');

class RegisterPOIsService{

  constructor(data){
    this._name = data.name;
    this._coordinateX = parseInt(data.coordinateX);
    this._coordinateY = parseInt(data.coordinateY);
  }

  save(){

    POIs.create({
      name: this._name,
      location: {
        type: "Point",
        coordinates: [this._coordinateX, this._coordinateY]
      }
    });

  }

}
module.exports = RegisterPOIsService;