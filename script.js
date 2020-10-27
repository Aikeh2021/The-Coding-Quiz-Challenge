console.log("le sigh");
//DOM Variables
var startQuiz = document.getElementById("start");
var openingDiv = document.getElementById("opening");
var contentDiv = document.getElementById("content-div");


//JS Variables
var quizContent = {
    quizQuestions: ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed within _________________.", "Arrays in JavaScript can be used to store _______________.", "String values must be enclosed within _______________ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"],
    questionOneAnswerOptions: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    questionTwoAnswerOptions: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
    questionThreeAnswerOptions: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
    questionFourAnswerOptions: ["1.commas", "2. curly brackets", "quotes", "4. parentheses"],
    questionFiveAnswerOptions: ["1.JavaScript", "2.terminal/bash", "3.for loops", "4.console.log"],
}


//Function Definitions
startQuiz.addEventListener("click", beginTheQuiz);
function beginTheQuiz(){
    openingDiv.innerHTML = ("");
    askQuestionOne();
};

function askQuestionOne(){
    var questionsHeadingEl = document.createElement("h1");
    questionsHeadingEl.setAttribute("id", "questionsHeading");
    questionsHeadingEl.textContent = quizContent.quizQuestions[0];
    contentDiv.appendChild(questionsHeadingEl);
};
        




//Function Calls
