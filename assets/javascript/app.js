var questions = $(".question");
var numCorrect = 0;
var numIncorrect = 0;
var number = 60;
var seconds;

function run() {
  seconds = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $(".timer").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    $(".timer").text("<h2>Time Up!");
    for (var i = 0; i < questions.length; i++) {


        // console.log(event);
        // console.log(event.target.class);
        // if (event.target.className === "right") {
        //     numCorrect++
        //     console.log(numCorrect);
        // } else {
        //     numIncorrect++
        //     console.log(numIncorrect);
        // }
    }
  }
}

function stop() {
  clearInterval(seconds);
}

run();