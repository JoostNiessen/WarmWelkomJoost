var MongoClient = require('mongodb').MongoClient;


const myDB = database.db("warmwelkom");


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/warmwelkom", function(err, db) {



	myDB.collection('scenes', function (err, collection) {

        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });

     });
     });

    console.log('Test Succesvol');

// summoning level 100