var endGame = document.getElementById("after-submit")
var game = document.getElementsByClassName("container")

//timer
// var timer;

// function myTimer(sec) {
//     if (timer) clearInterval(timer);
//     timer = setInterval(function() {
//         $('#timer').text(sec--);
//         if (sec == -1) {
//             clearInterval(timer);
//             alert('done');
//         }
//     }, 1000);
// }
var timeLeft = 30;
    var elem = document.getElementById('some_div');
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearInterval(timerId);
        game.hide();
        (endgame).show();
        elem.innerHTML = timeLeft + ' seconds remaining';
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
var questionsUnanswered = 0;


//if statements for questions answered correctly

if (question1 == "City") {
    correctAnswers++;
    questionsUnanswered+- 0;
}

if (question2 == "Eagles") {
    correctAnswers++;
    questionsUnanswered+- 0;
}

if (question3 == "nyc") {
    correctAnswers++;
    questionsUnanswered+- 0;
}

if (question4 == "United") {
    correctAnswers++;
    questionsUnanswered+- 0;
}

if (question5 == "Football") {
    correctAnswers++;
    questionsUnanswered+- 0;
}
if (question1 == "City",question2 == "Eagles",question3 == "nyc",question4 == "United",question5 == "Football") {
    correctAnswers++;
    alert('Wow!! You got them all right!');
}

//else if statements for wrong answers
else if (question1 == "Spurs", "United", "Chelsea") {
    wrongAnswers++;
    questionsUnanswered+- 0;
}

else if (question2 == "Cowboys","Patriots","Steelers") {
    wrongAnswers++;
    questionsUnanswered+- 0;
}

else if (question3 == "Boston","Chicago","losAngeles") {
    wrongAnswers++;
    questionsUnanswered+- 0;
}

else if (question4 == "Liverpool","Chelsea","City") {
    wrongAnswers++;
    questionsUnanswered+- 0;
}

else if (question5 == "Soccer","Baseball","Basketball") {
    wrongAnswers++;
    questionsUnanswered+- 0;
}

else if (question1 == "Spurs", "United", "Chelsea",question2 == "Cowboys","Patriots","Steelers",question3 == "Boston","Chicago","losAngeles",question4 == "Liverpool","Chelsea","City", question5 == "Soccer","Baseball","Basketball") {
    wrongAnswers++;
}

//messages displayed after each question
//var messages = ["Wow! You got it right!", "Too bad! That's not a correct!"]

//var images = ["/assets/images/background.jpg"]

document.getElementById("after-submit").style.visibility="visible";
document.getElementById("number_correct").innerHTML="You got " + correctAnswers + " correct answers!";
document.getElementById("unanswered").innerHTML="You got " + questionsUnanswered + " questions unanswered!";
document.getElementById("wrong").innerHTML="You got " + wrongAnswers + " wrong answers!";
}