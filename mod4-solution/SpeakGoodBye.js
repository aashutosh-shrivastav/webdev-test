(function(window){
  
var byeSpeaker = {};
byeSpeaker.speak = function(name){
    speak(name);
};

var speakWord = "Good Bye";


function speak(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker=byeSpeaker;
}
)(window);