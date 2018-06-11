
var MongoClient = require('mongodb').MongoClient;

// var tools = require('./videoscript.js');


MongoClient.connect("mongodb://localhost:27017/warmwelkom",(err,database) =>{ 
    const myDB = database.db('warmwelkom')
    myDB.collection('scenes')

        myDB.collection('scenes', function(err, collection) {
            //in de scenes staan de paden naar de juiste shots in chronologische volgorde
                
            collection.find().toArray(function(err, result) {
            // de opgehaalde resultaten worden in een array gezet


            result.forEach(function(scene){
                // elk resultaat wordt een scene

                var shotArray = scene.shots;
                // de shots die in de scene zitten worden in shotArray gezet

                var fluent_ffmpeg = require("fluent-ffmpeg");

                var mergedVideo = fluent_ffmpeg();

                for (var videoName in shotArray){
                    if (typeof shotArray[videoName] !== 'function') {
                        console.log(shotArray[videoName]);
                        //arrays gelogd om te checken
                        mergedVideo = mergedVideo.addInput(shotArray[videoName]);
                        //videonamen in de shotarray worden als input gezet
                    }
                }

                console.log("Your video is being compiled");
                //proces zichtbaar gemaakt in de console

                
                mergedVideo.mergeToFile('C:/Users/Joost/videoWW/ProofOfConcept0.mp4', './tmp/')
                //de mergedvideo uit de vorige loop wordt in nieuwe video + pad als output gezet
                .on('error', function(err) {
                    console.log('Error ' + err.message);
                })

                .on('end', function() {
                    console.log('Your video is finished!');
                process.exit()
                    //proces laten stoppen

                });
            });           
        });
    });
});

