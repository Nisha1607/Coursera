// See Lecture 52, part 1
(function(){
 var helloSpeaker = {};

var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}
window.helloSpeaker = helloSpeaker;

})();
