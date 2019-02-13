module.exports = (app) => {

	//Rota principal só para tester se a api esta rodando
	app.get('/', (req, res) => {
		res.json('Api On')
	})

}