
var numOfHeading = document.querySelectorAll("h3").length;

for (var i = 0; i < numOfHeading; i++) {
  document.querySelectorAll("h3")[i].addEventListener("click", function clickHandler() {
    var headingText = this.innerHTML;

    readContent(headingText);

  });
}


function readContent(text) {

  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en';
  var voices = window.speechSynthesis.getVoices();

  msg.voice = voices[2];

  window.speechSynthesis.speak(msg);

}
