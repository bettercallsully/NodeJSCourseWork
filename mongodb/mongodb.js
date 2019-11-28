const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
  });
const db = client.db('comics');
const collection = db.collection('superheroes');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
  const db = client.db('comics');
  const collection = db.collection('superheroes');

  collection.find({}).toArray((error, documents) => {
    console.log(documents);
    client.close();
  });
});

app.get('/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
      const db = client.db('comics');
      const collection = db.collection('superheroes');
  
      collection.find({"find: WOLVERINE"}).toArray((error, documents) => {
        client.close();
        res.render('index', { documents: documents });
      });
    });
  });