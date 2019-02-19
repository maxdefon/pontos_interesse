const db = require('../config/database');
const app = require('../config/custom-express')();
const chai = require('chai');
const expect = chai.expect;
const chaihttp = require('chai-http');
chai.use(chaihttp);

before(done => {
	db.connect().then(() => done()).catch(done);
});

after(done => {
	db.close().then(() => done()).catch(done);
});

describe("Testando rota inicial da API", () => {


	it('Api deve retornar status 200', done => {
		chai.request(app)
		.get('/')
		.end((error, response) =>{
			expect(response.statusCode).to.equal(200);
			done();
		});

	});

});

describe("Testando endpoints dos pontos de interesse", () => {
	it('Deve cadastrar um ponto de interesse', done => {
		chai.request(app)
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
  	chai.request(app)
		.get('/pois/listar')
		.then(response =>{
			expect(response.statusCode).to.equal(200);
			expect(response.body.pois[0].name).to.equal('Lanchonete');
			done();
		});
	});

	it('Deve retornar uma lista de pontos de interesse por proximidade', done => {
		let coordX = 20;
		let coordY = 10;
		let maxDistance = 10;
		chai.request(app)
		.get(`/pois/listar-coordernadas/${coordX}/${coordY}/${maxDistance}`)
		.then(response =>{
			expect(response.statusCode).to.equal(200);
			expect(response.body.pois[0].name).to.equal('Lanchonete');
			done();
		})
		.catch(done);
	});

	it('Deve retornar erro, distancia máxima não pode ser negativo', done => {
		let coordX = 20;
		let coordY = 10;
		let maxDistance = -10;
		chai.request(app)
		.get(`/pois/listar-coordernadas/${coordX}/${coordY}/${maxDistance}`)
		.then(response =>{
			expect(response.statusCode).to.equal(200);
			expect(response.body.error.errmsg).to.equal('$maxDistance must be non-negative');
			done();
		})
		.catch(done);
	});

});