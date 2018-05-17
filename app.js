
var MongoClient = require('mongodb').MongoClient;

// var tools = require('./videoscript.js');


MongoClient.connect("mongodb://localhost:27017/warmwelkom",(err,database) =>{ 
    const myDB = database.db('warmwelkom')
    myDB.collection('scenes')

        myDB.collection('scenes', function(err, collection) {
                
            collection.find().toArray(function(err, result) {


            result.forEach(function(scene){

                var shotArray = scene.shots;

                var fluent_ffmpeg = require("fluent-ffmpeg");

                var mergedVideo = fluent_ffmpeg();

                for (var videoName in shotArray){
                    if (typeof shotArray[videoName] !== 'function') {
                        console.log(shotArray[videoName]);
                        mergedVideo = mergedVideo.addInput(shotArray[videoName]);
                    }
                }

                console.log("Your video is being compiled");


                mergedVideo.mergeToFile('C:/Users/Joost/videoWW/ProofOfConcept0.mp4', './tmp/')
                .on('error', function(err) {
                    console.log('Error ' + err.message);
                })

                .on('end', function() {
                    console.log('Your video is finished!');
                process.exit()

                });
            });           
        });
    });
});

