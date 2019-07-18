const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb://tester:test1234@ds351987.mlab.com:51987/node-commerce-mongodb', { useNewUrlParser: true })
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => console.log(err));
};

const getDb = ()  => {
  if (_db) {
    return _db;
  }
  throw 'no db found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;