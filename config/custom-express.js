const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = () => {
  let app = express();
  app.use(cors());

  app.use(bodyParser.urlencoded({'extended':'true'}));
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/json' }));

  consign()
   .include('routes')
   .into(app);

  return app;
}
