//Testing to make sure we're connected
console.log("le sigh");
//DOM Variables
var startQuiz = document.getElementById("start");
var openingDiv = document.getElementById("opening");
var contentDiv = document.getElementById("content-div");

//Object with an array of quiz questions and arrays for each of the answer options for each of the questions
var quizContent = {
  quizQuestions: [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within _________________.",
    "Arrays in JavaScript can be used to store _______________.",
    "String values must be enclosed within _______________ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  ],
  questionOneAnswerOptions: [
    "1.strings",
    "2.booleans",
    "3.alerts",
    "4.numbers",
  ],
  questionTwoAnswerOptions: [
    "1.quotes",
    "2.curly brackets",
    "3.parentheses",
    "4.square brackets",
  ],
  questionThreeAnswerOptions: [
    "1.numbers and strings",
    "2.other arrays",
    "3.booleans",
    "4.all of the above",
  ],
  questionFourAnswerOptions: [
    "1.commas",
    "2. curly brackets",
    "quotes",
    "4. parentheses",
  ],
  questionFiveAnswerOptions: [
    "1.JavaScript",
    "2.terminal/bash",
    "3.for loops",
    "4.console.log",
  ],
};

//Global index variable
var index = 0;

//Global time variable
var secondsLeft = 60;

//Function to set and start the timer. Also alerts when the timer is finished
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    var timer = document.getElementById("time-display");
    timer.textContent = "Timer: " + secondsLeft + " seconds left";
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("GAME OVER!");
      location.replace("highscore.html");
    }
  }, 1000);
}

//Function Definitions
startQuiz.addEventListener("click", function () {
  openingDiv.innerHTML = "";
  setTime();
  askQuestionOne();
});

//Function to put question 1 on screen
function askQuestionOne() {
  //Creating the heading that will display a question
  var questionsHeadingEl = document.createElement("h1");
  questionsHeadingEl.setAttribute("id", "questionsHeading");
  questionsHeadingEl.textContent = quizContent.quizQuestions[0];
  contentDiv.appendChild(questionsHeadingEl);
  for (i = 0; i < quizContent.questionOneAnswerOptions.length; i++) {
    var parEl = document.createElement("p");
    parEl.setAttribute("class", "questions-par-el");
    var answerButton = document.createElement("button");
    answerButton.textContent = quizContent.questionOneAnswerOptions[i];
    index++;
    answerButton.setAttribute("id", index);
    parEl.appendChild(answerButton);
    contentDiv.appendChild(parEl);
    //Adding event listener to answerbuttons and doing something after one is clicked (starting another timer and letting the user
    // know their selection was either right or wrong and either increasing the quiz time or decreasing it)
    answerButton.addEventListener("click", function (event) {
      if (event.target === document.getElementById("3")) {
        var miniTimer = 2;
        function setMiniTime() {
          var timeInterval = setInterval(function () {
            miniTimer--;
            console.log("This is the right answer");
            var line = document.createElement("hr");
            var message = document.createElement("p");
            message.textContent = "You chose the right answer!";
            contentDiv.append(line, message);
            if (miniTimer === 0) {
                secondsLeft = secondsLeft + 4;
                askQuestionTwo();
              clearInterval(timeInterval);
            }
          }, 1000);
        }
        setMiniTime();
      } else {
        var miniTimer = 2;
        function setMiniTime() {
          var timeInterval = setInterval(function () {
            miniTimer--;
            console.log("You chose wrong");
            var line = document.createElement("hr");
            var message = document.createElement("p");
            message.textContent = "Sorry! Better luck next time . . . ";
            contentDiv.append(line, message);
            if (miniTimer === 0) {
                secondsLeft = secondsLeft - 6;
                askQuestionTwo();
              clearInterval(timeInterval);
            }
          }, 1000);
        }
        setMiniTime();
      }
    });
  }
}

//Function to put question 2 on screen
function askQuestionTwo() {
  contentDiv.textContent = "";
}
