// Retrieve
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect("mongodb://localhost:27017/warmwelkom",(err,database) =>{ 
  const myAwesomeDB = database.db('warmwelkom')
  myAwesomeDB.collection('scenes')
})

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/warmwelkom", function(err, db) {
//   if(err) { return console.dir(err); }

//   db.collection('scenes', function(err, collection) {});


// });

console.log('test123')