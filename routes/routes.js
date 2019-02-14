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

	//Rota para listar pontos de interesse por aproximação
	app.get('/pois/listar-coordernadas/:coordinateX/:coordinateY/:maxDistance',
  (req, res)=>{
    let poiController = new POIController();
    poiController.ListByCoordinates(req.params)
    .then(data => {
      res.json({'pois': data});
    }).catch((error) => {
      console.log(error);
      res.json({'error': error});
    });
  })

}