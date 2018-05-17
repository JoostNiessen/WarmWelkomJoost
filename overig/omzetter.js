



	var fluent_ffmpeg = require("fluent-ffmpeg");

	var mergedVideo = fluent_ffmpeg();
	var videoNames = ['C:/movie/shots/video4.mp4', 'C:/movie/shots/video3.mp4', 'C:/movie/shots/video2.mp4', 'C:/movie/shots/video1.mp4'];

	videoNames.forEach(function(videoName){
	    mergedVideo = mergedVideo.addInput(videoName);
	});
    
    console.log("Your video is being compiled");

	mergedVideo.mergeToFile('C:/movie/shots/video5.mov', './tmp/')
	.on('error', function(err) {
	    console.log('Error ' + err.message);
	})
	.on('end', function() {
	    console.log('Your video is finished!');
	});  



// functie van maken, videonames meegeven aan de functies 
// function videos([videoNames])

//eigen node mudule maken 

// var videoNames = ['C:/Users/Joost/videoWW/transcoded_video1.mp4', 'C:/Users/Joost/videoWW/transcoded_video2.mp4'];
