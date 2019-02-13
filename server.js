const app = require('./config/custom-express')();

app.listen(5000, function() {
  console.log(`Servidor rodando na porta 5000`);
});