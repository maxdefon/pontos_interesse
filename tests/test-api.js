var expect = require('chai').expect;
var request = require('request');
var baseUrl = "http://localhost:5000/";

describe("Testando API", function () {
	it('Api deve retornar status 200', function (done) {
		request(baseUrl, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			done();
		});
  });
});