const POIController = require('../controller/POIController');


module.exports = (app) => {

	//Rota inicial
	app.get('/', (req, res) => {
		res.json('Api On')
	})


	//Rota de cadastro
  app.post('/pois/cadastrar', (req, res)=>{
    let poiController = new POIController();
    poiController.register(req.body);
    res.json(req.body);
  })


}