const RegisterService = require('../services/RegisterPOIsService');

class POIController{

  register(data){
    let registerService = new RegisterService(data);
    registerService.save();
  }

}
module.exports = POIController;