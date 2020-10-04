console.log("sigh");
//DOM Variables
var startQuiz = document.getElementById("start");
var openingDiv = document.getElementsById("opening");


//JS Variables



//Function Definitions
startQuiz.addEventListener("click", function (){
    this.remove(openingDiv);
    // console.log("you clicked a button")
});



//Function Calls