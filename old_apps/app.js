
var MongoClient = require('mongodb').MongoClient;

var tools = require('./videoscript.js');

var script = require('./helloscript.js');



// function scenemaker(shotArray) 
// {
//     var fluent_ffmpeg = require("fluent-ffmpeg");

//     var mergedVideo = fluent_ffmpeg();
//     var videoNames = shotArray; //['shot1', 'shot2', 'shot3'];

//     videoNames.forEach(function(videoName){
//         mergedVideo = mergedVideo.addInput(videoNames);
//     });

//     mergedVideo.mergeToFile('C:/Users/Joost/videoWW/finalscene.mp4', './tmp/')
//     .on('error', function(err) {
//         console.log('Error ' + err.message);
//     })

//     .on('end', function() {
//         console.log('Your video is finished!');
//     }); 
// }


MongoClient.connect("mongodb://localhost:27017/warmwelkom",(err,database) =>{ 
  const myDB = database.db('warmwelkom')
  myDB.collection('scenes')


myDB.collection('scenes', function(err, collection) {
        
        collection.find().toArray(function(err, result) {

        var shotArray = [result[1].shots[0], result[1].shots[1], result[1].shots[2]];

            console.log(shotArray);

    var fluent_ffmpeg = require("fluent-ffmpeg");

    var mergedVideo = fluent_ffmpeg();

    shotArray.forEach(function(videoName){
        mergedVideo = mergedVideo.addInput(shotArray);
    });

    mergedVideo.mergeToFile('C:/Users/Joost/videoWW/finalscene.mp4', './tmp/')
    .on('error', function(err) {
        console.log('Error ' + err.message);
    })

    .on('end', function() {
        console.log('Your video is finished!');
    });        });

    });

})

console.log('test123');


// bij ophalen ook in elkaar zetten 
// json uitlezen en omzetten in juiste shot 
// naam deel aan hoofddeel plakken 
// 
// gegevens ophalen uit 
// db -> naar stitcher

// 