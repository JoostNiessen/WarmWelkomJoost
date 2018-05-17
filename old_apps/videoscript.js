
//const shotArray = ['shot1', 'shot2', 'shot3'];

exports.makeScene = function (shotArray) 
{
	var fluent_ffmpeg = require("fluent-ffmpeg");

	var mergedVideo = fluent_ffmpeg();
	var videoNames = shotArray; //['shot1', 'shot2', 'shot3'];

	videoNames.forEach(function(videoName){
	    mergedVideo = mergedVideo.addInput(videoName);
	});

	mergedVideo.mergeToFile('C:/Users/Joost/videoWW/finalscene.mp4', './tmp/')
	.on('error', function(err) {
	    console.log('Error ' + err.message);
	});

	on('end', function() {
	    console.log('Your video is finished!');
	}); 
}





// functie van maken, videonames meegeven aan de functies 
// function videos([shotNames])

//eigen node mudule maken 

// var videoNames = ['C:/Users/Joost/videoWW/transcoded_video1.mp4', 'C:/Users/Joost/videoWW/transcoded_video2.mp4'];
