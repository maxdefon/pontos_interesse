const RegisterService = require('../services/RegisterPOIsService');
const ListService = require('../services/ListPOIsService');


class POIController{

  register(data){
    let registerService = new RegisterService(data);
    registerService.save();
  }

  list() {
    let listService = new ListService();
    return listService.dataPOIs();
  }

}
module.exports = POIController;