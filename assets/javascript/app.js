var endGame = document.getElementById("after-submit")
var game = document.getElementsByClassName("container")

//timer
var timeLeft = 30;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        game.hide();
        (endgame).show();
      } 
      
      else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }


function reset() {
    correctAnswers.innerText = 0;
    wrongAnswers.innerText = 0;
    questionsUnanswered = 0;
}

////Create a function to check the answers of the question
function check(){
    


//variables for each question
var question1 = document.trivia.question1.value,
    question2 = document.trivia.question2.value,
    question3 = document.trivia.question3.value,
    question4 = document.trivia.question4.value,
    question5 = document.trivia.question5.value;

var correctAnswers = 0;
var wrongAnswers = 0;
var questionsUnanswered;


//if statements for questions answered correctly

if (question1 == "City") {
    correctAnswers++;
}

if (question2 == "Eagles") {
    correctAnswers++;
}

if (question3 == "nyc") {
    correctAnswers++;
}

if (question4 == "United") {
    correctAnswers++;
}

if (question5 == "Football") {
    correctAnswers++;
}

else if (question1 == "Spurs", "United", "Chelsea") {
    wrongAnswers++;
}

else if (question2 == "Cowboys","Patriots","Steelers") {
    wrongAnswers++;
}

else if (question3 == "Boston","Chicago","losAngeles") {
    wrongAnswers++;
}

else if (question4 == "Liverpool","Chelsea","City") {
    wrongAnswers++;
}

else if (question4 == "Soccer","Baseball","Basketball") {
    wrongAnswers++;
}


var messages = ["Wow! You got it right!", "Too bad! That's not correctAnAnswers!"]

//var images = ["/assets/images/background.jpg"]

document.getElementById("after-submit").style.visibility="visible";
document.getElementById("number_correct").innerHTML="You got " + correctAnswers + " correct answers!";
document.getElementById("unanswered").innerHTML="You got " + questionsUnanswered + " questions unanswered!";
document.getElementById("wrong").innerHTML="You got " + wrongAnswers + " wrong answers!";
}