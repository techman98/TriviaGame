$(document).ready(function() {
var questions = $(".question");
var numCorrect = 0;
var numIncorrect = 0;
var seconds = 60;
var intervalId;

// var answer = 

function run() {
  $(".timer").html("<h2>" + seconds + "</h2>");
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  seconds--;
  $(".timer").html("<h2>" + seconds + "</h2>");
  if (seconds === 0) {
    stop();
    $(".timer").text("Time Up!");
    checkAnswers();
  }
}

function stop() {
  clearInterval(intervalId);

}

function checkAnswers() {
  for (var i = 1; i <= questions.length; i++) {

    var selector = `input[name=answer${i}]:checked`;
    var checked = ($(selector).attr("value"));
    if (checked === "right") numCorrect++
    else numIncorrect++

  }
  $(".questions").html("<h2>" + "Correct: " + numCorrect + "<br>" + "Incorrect: " + numIncorrect + "</h2>");
}

run();
})