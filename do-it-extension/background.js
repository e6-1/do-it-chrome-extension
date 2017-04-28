$(document).ready(function() {
	var chance = Math.floor(Math.random() * 5);
	console.log(chance);
	if(chance == 0) {
		tickingVideo();
	}
	if(chance == 1) {
		tickingAudioSnape();
	}
	if(chance == 2) {
		tickingAudioNoSnape();
	}
});

var tickingVideo = function() {
	// chrome.tabs.executeScript({file: "inject.js"});
	var videoEl = document.querySelector('.shia-do-it .shia-do-it--container video');
	if (videoEl == null) {
		var div = document.createElement('div');
		document.body.appendChild(div);
		div.className = 'shia-do-it';
		div.style.cssText = ('position: fixed; bottom: 0px; z-index: 99999; right: 0px; height: 530px; width: 720px; pointer-events: none;');
		div.innerHTML = '<div class="shia-do-it--container" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="960" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
		var video = document.querySelector('.shia-do-it .shia-do-it--container video');
		video.style.visibility = "hidden";
		video.src = chrome.extension.getURL("/media/ppp_short.webm");
		video.load();
		video.addEventListener('loadeddata', function() {
		   video.style.visibility = "visible";
		   video.play();
		}, false);
		video.onerror = function() {
	    	alert("Couldnt load Shia :( Try another page.");
		};
	} else {
		videoEl.play();
	}
};

var tickingAudioSnape = function() {
	var myAudio = new Audio();        // create the audio object
	myAudio.src = chrome.extension.getURL("/media/ppp_ticking_s.mp3");
	myAudio.play();                   // play the music
};

var tickingAudioNoSnape = function() {
	var myAudio = new Audio();        // create the audio object
	myAudio.src = chrome.extension.getURL("/media/ppp_ticking.mp3");
	myAudio.play();                   // play the music
};