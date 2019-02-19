const app = require('./config/custom-express')();
const db = require('./config/database');

db.connect().then(()=>{
  app.listen(5000, () => {
    console.log(`Servidor rodando na porta 5000`);
  });
});

