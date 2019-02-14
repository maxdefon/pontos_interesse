const POIs = require('../models/POIs');

class RegisterPOIsService{

  constructor(data){
    this._name = data.name;
    this._coordinateX = parseInt(data.coordinateX);
    this._coordinateY = parseInt(data.coordinateY);
  }

  async save(){
    try {
      let create = await POIs.create({
        name: this._name,
        location: {
          type: "Point",
          coordinates: [this._coordinateX, this._coordinateY]
        }
      });
      return create;
    } catch (e) {
        // Log Errors
        throw Error('Erro ao cadastar ponto de interesse');
    }
  }

}
module.exports = RegisterPOIsService;