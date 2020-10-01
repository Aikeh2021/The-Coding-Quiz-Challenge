//Step 1: Test the javascript file to make sure it's linked correctly
console.log("WE LIVE BABY!");
console.log(window.document.body)
//Step 2: Listen for the click to make the opening page content disappear 
//add event listener//
//queryselector(select main) to set its visibility property to 0
// document.querySelector("main").removeChild();

//  $("start").click(function(){
    // $("main").empty();
// })



document.getElementById("start").addEventListener("click", emptyTheMain);
function emptyTheMain(){
    document.getElementById("main").innerHTML = "";
    
    // var newDiv = document.createElement("div").setAttribute("class", "name: main-div");
    // document.body.append(newDiv);

}

//Step 3: Start The Timer


//Step 4: Simultaneously, dynamically create the question with buttons that have answer options


// Variables to create shortcuts for the question elements
// var h1El1 = document.createElement("h1");
// var dlEl = document.createElement("dl");
// var dtEl1 = document.createElement("dt");
// var btnEl1 = document.createElement("button");
// var dtEl2 = document.createElement("dt");
// var btnEl2 = document.createElement("button");
// var dtEl3 = document.createElement("dt");
// var btnEl3 = document.createElement("button");
// var dtEl4 = document.createElement("dt");
// var btnEl4 = document.createElement("button");

if("main".textContent = ""){document.getElementById("main")

var h1El1 = document.createElement("h1");
var dlEl = document.createElement("dl");
var dtEl1 = document.createElement("dt");
var btnEl1 = document.createElement("button");
var dtEl2 = document.createElement("dt");
var btnEl2 = document.createElement("button");
var dtEl3 = document.createElement("dt");
var btnEl3 = document.createElement("button");
var dtEl4 = document.createElement("dt");
var btnEl4 = document.createElement("button");


    h1El1.textContent = "Commonly used data types DO NOT include:";
    document.body.main.append(h1El1);
    btnEl1.textContent = "1.strings";
    dtEl1.append(btnEl1);
    dlEl.append(dtEl1);
    document.body.main.append(dlEl);
    btnEl2.textContent = "2.booleans";
    dtEl2.append(btnEl2);
    dlEl.append(dtEl2);
    document.body.main.append(dlEl);
    btnEl3.textContent = "3.alerts";
    dtEl3.append(btnEl3);
    dlEl.append(dtEl3);
    document.body.main.append(dlEl);
    btnEl4.textContent = "4.numbers";
    dtEl4.append(btnEl4);
    dlEl.append(dtEl4);
    document.body.main.append(dlEl);
}else{
    console.log("main is still full");
}

//     h1El1.textContent = "Commonly used data types DO NOT include:";
//     document.body.main.append(h1El1);
//     btnEl1.textContent = "1.strings";
//     dtEl1.append(btnEl1);
//     dlEl.append(dtEl1);
//     document.body.main.append(dlEl);
//     btnEl2.textContent = "2.booleans";
//     dtEl2.append(btnEl2);
//     dlEl.append(dtEl2);
//     document.body.main.append(dlEl);
//     btnEl3.textContent = "3.alerts";
//     dtEl3.append(btnEl3);
//     dlEl.append(dtEl3);
//     document.body.main.append(dlEl);
//     btnEl4.textContent = "4.numbers";
//     dtEl4.append(btnEl4);
//     dlEl.append(dtEl4);
//     document.body.main.append(dlEl);
// }else{
//     console.log("main is still full");
// }

//Start The Timer
// var timeShowEl = document.getElementById("timer");

// document.getElementById("").addEventListener("click", timeGoesDown);
// function timeGoesDown(){
// function countDown(){
//     var timeLeft=75;
//     var timeGoesDown=setInterval(function(){
//         timeLeft--;
//         timeShowEl.textContent= "Time: "+ timeLeft;
//         if(timeLeft === 0){
//             console.log("all done!");}
//         }, 1000);
//     }
// var h1El1 = document.createElement("h1");
// var dlEl = document.createElement("dl");
// var dtEl1 = document.createElement("dt");
// var btnEl1 = document.createElement("button");
// var dtEl2 = document.createElement("dt");
// var btnEl2 = document.createElement("button");
// var dtEl3 = document.createElement("dt");
// var btnEl3 = document.createElement("button");
// var dtEl4 = document.createElement("dt");
// var btnEl4 = document.createElement("button");

//Question 1, dynamically generated Elements

// h1El1.textContent = "Commonly used data types DO NOT include:";
// document.body.append(h1El1);
// btnEl1.textContent = "1.strings";
// dtEl1.append(btnEl1);
// dlEl.append(dtEl1);
// document.body.append(dlEl);
// btnEl2.textContent = "2.booleans";
// dtEl2.append(btnEl2);
// dlEl.append(dtEl2);
// document.body.append(dlEl);
// btnEl3.textContent = "3.alerts";
// dtEl3.append(btnEl3);
// dlEl.append(dtEl3);
// document.body.append(dlEl);
// btnEl4.textContent = "4.numbers";
// dtEl4.append(btnEl4);
// dlEl.append(dtEl4);
// document.body.append(dlEl);

//this empties out all the content:
// document.getElementById("opening-content").remove();

// //Question 2, dynamically generated Elements
// h1El1.textContent = "The condition in an if/else statement is encolosed within ____________.";
// document.body.append(h1El1);
// btnEl1.textContent = "1.quotes";
// dtEl1.append(btnEl1);
// dlEl.append(dtEl1);
// document.body.append(dlEl);
// btnEl2.textContent = "2.curly brackets";
// dtEl2.append(btnEl2);
// dlEl.append(dtEl2);
// document.body.append(dlEl);
// btnEl3.textContent = "3.parentheses";
// dtEl3.append(btnEl3);
// dlEl.append(dtEl3);
// document.body.append(dlEl);
// btnEl4.textContent = "4.square brackets";
// dtEl4.append(btnEl4);
// dlEl.append(dtEl4);
// document.body.append(dlEl);

// //Question 3, dynamically generated Elements
// h1El1.textContent = "Arrays in JavaScript can be used to store _____________.";
// document.body.append(h1El1);
// btnEl1.textContent = "1.numbers and strings";
// dtEl1.append(btnEl1);
// dlEl.append(dtEl1);
// document.body.append(dlEl);
// btnEl2.textContent = "2.other arrays";
// dtEl2.append(btnEl2);
// dlEl.append(dtEl2);
// document.body.append(dlEl);
// btnEl3.textContent = "3.booleans";
// dtEl3.append(btnEl3);
// dlEl.append(dtEl3);
// document.body.append(dlEl);
// btnEl4.textContent = "4.all of the above";
// dtEl4.append(btnEl4);
// dlEl.append(dtEl4);
// document.body.append(dlEl);

// //Question 4, dynamically generated Elements
// h1El1.textContent = "String values must be encolosed within ___________ when being assigned to variables.";
// document.body.append(h1El1);
// btnEl1.textContent = "1.commas";
// dtEl1.append(btnEl1);
// dlEl.append(dtEl1);
// document.body.append(dlEl);
// btnEl2.textContent = "2.curly brackets";
// dtEl2.append(btnEl2);
// dlEl.append(dtEl2);
// document.body.append(dlEl);
// btnEl3.textContent = "3.quotes";
// dtEl3.append(btnEl3);
// dlEl.append(dtEl3);
// document.body.append(dlEl);
// btnEl4.textContent = "4.parentheses";
// dtEl4.append(btnEl4);
// dlEl.append(dtEl4);
// document.body.append(dlEl);

// //Question 5, dynamically generated Elements
// h1El1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
// document.body.append(h1El1);
// btnEl1.textContent = "1.JavaScript";
// dtEl1.append(btnEl1);
// dlEl.append(dtEl1);
// document.body.append(dlEl);
// btnEl2.textContent = "2.terminal/bash";
// dtEl2.append(btnEl2);
// dlEl.append(dtEl2);
// document.body.append(dlEl);
// btnEl3.textContent = "3.for loops";
// dtEl3.append(btnEl3);
// dlEl.append(dtEl3);
// document.body.append(dlEl);
// btnEl4.textContent = "4.console.log";
// dtEl4.append(btnEl4);
// dlEl.append(dtEl4);
// document.body.append(dlEl);
