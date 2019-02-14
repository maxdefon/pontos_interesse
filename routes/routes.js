const POIController = require('../controller/POIController');

module.exports = (app) => {

	//Rota inicial
	app.get('/', (req, res) => {
		res.json('Api On')
	})

	//Rota para cadastrar ponto de interesse
  app.post('/pois/cadastrar', (req, res)=>{
    let poiController = new POIController();
    poiController.register(req.body);
    res.json(req.body);
	})

	//Rota para listar pontos de interesse
  app.get('/pois/listar', (req, res) => {
    let poiController = new POIController();
    poiController.list().then((data) => {
      res.json({'pois': data});
    }).catch(() => {
      res.json({error: 'error'});
    });
	})




}