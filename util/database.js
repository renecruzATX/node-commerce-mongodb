const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect('mongodb://tester:test1234@ds351987.mlab.com:51987/node-commerce-mongodb')
  .then(client => {
    console.log('Connected!');
    callback(client);
  })
  .catch(err => console.log(err));
};

module.exports = mongoConnect;