var expect = require('chai').expect;
var request = require('request');
var baseUrl = "http://localhost:5000";

function convertJson(body) {
	let _body = {};
	try {
		return _body = JSON.parse(body);
	} catch (e) {
		return _body = {};
	}
}

describe("Testando API", () => {
	it('Api deve retornar status 200', done => {
		request(baseUrl, (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});

	it('Deve cadastrar um ponto de interesse', done => {
		request.post(`${baseUrl}/pois/cadastrar`,
		{
			form:{
				name:'Lanchonete',
				coordinateX: 27,
				coordinateY: 12,
			}
		},
		(error, response, body) => {
			console.log(body);
			let _body = convertJson(body);
			expect(response.statusCode).to.equal(200);
			expect(_body.msg).to.equal('Ponto de interesse cadastrado com sucesso!');

			done();
		});
	});

	it('Deve retornar uma lista de pontos de interesse', done => {
		request(`${baseUrl}/pois/listar`, (error, response, body) => {
			let _body = convertJson(body);

			expect(response.statusCode).to.equal(200);
			expect(_body.pois[0].name).to.equal('Lanchonete');

			done();
		});
	});
	

	it('Deve retornar uma lista de pontos de interesse por proximidade', done => {
		let _coordX = 20;  //Coordenada x
		let _coordY = 10;  //Coordenada y
		let _maxD = 10;		// distância máxima
		request(`${baseUrl}/pois/listar/${_coordX}/${_coordY}/${_maxD}`, (error, response, body) => {
			let _body = convertJson(body);

			expect(response.statusCode).to.equal(200);
			expect(_body.pois[0].name).to.equal('Lanchonete');

			done();
		});
	});

});