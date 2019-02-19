const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function connect(){
    return new Promise((resolve, reject) => {
        if(process.env.DEBUG) {
            //Connect mock for running testing
            let Mockgoose = require('mockgoose').Mockgoose;
            let mockgoose = new Mockgoose(mongoose);
            mockgoose.prepareStorage().then(() => {
                mongoose.connect('mongodb://localhost/base_test', (err, res) => {
                  if (err) return reject(err);
                  resolve();
                });
            }).catch(reject);
        }else{
          //Connect db
          mongoose.connect('mongodb://localhost/base', (err, res) => {
            if (err) return reject(err);
            resolve();
          });
        }
    });
}

function close(){
    return mongoose.disconnect();
}
module.exports = { connect, close };