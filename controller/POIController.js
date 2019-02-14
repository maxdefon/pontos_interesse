const RegisterService = require('../services/RegisterPOIsService');
const ListService = require('../services/ListPOIsService');
const ListByCoordinatesService = require('../services/ListByCoordinatesService');



class POIController{

  register(data){
    let registerService = new RegisterService(data);
    registerService.save();
  }

  list() {
    let listService = new ListService();
    return listService.dataPOIs();
  }

  ListByCoordinates(data){
    let listByCoordinates = new ListByCoordinatesService(data);
    return listByCoordinates.getResult();
  }

}
module.exports = POIController;