const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const chaihttp = require('chai-http');
const baseUrl = "http://localhost:5000";
chai.use(chaihttp);

describe("Testando API", () => {

	it('Api deve retornar status 200', done => {
		request(baseUrl, (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});

	it('Deve cadastrar um ponto de interesse', done => {
		chai.request(baseUrl)
		.post('/pois/cadastrar')
		.send({
			'_method': 'post',
			name:'Lanchonete',
			coordinateX: 27,
			coordinateY: 12,
		})
		.then(response =>{
			expect(response.statusCode).to.equal(200);
			expect(response.body.data.name).to.equal('Lanchonete');
			expect(response.body.message).to.equal('Ponto de interesse cadastrado com sucesso!');
			done();
		});

	});

	it('Deve retornar uma lista de pontos de interesse', done => {
  	chai.request(baseUrl)
		.get('/pois/listar')
		.then(response =>{
			expect(response.statusCode).to.equal(200);
			expect(response.body.pois[0].name).to.equal('Lanchonete');
			done();
		});
	});

	it('Deve retornar uma lista de pontos de interesse por proximidade', done => {
		chai.request(baseUrl)
		.get('/pois/listar')
		.query({
			coordinateX: 20, 
			coordinateY: 10,
			maxDistance: 10,
		})
		.then(response =>{
			expect(response.statusCode).to.equal(200);
			expect(response.body.pois[0].name).to.equal('Lanchonete');
			done();
		});
	});

});