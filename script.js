//Step 1: Test the javascript file to make sure it's linked correctly
console.log("WE LIVE BABY!");
//Step 2: Listen for the click to make the opening page content disappear

//Step 3: Simultaneously, dynamically create the question with buttons that have answer options
var h1El1 = document.createElement("h1");
var dlEl = document.createElement("dl");
var dtEl1 = document.createElement("dt");
var btnEl1 = document.createElement("button");
var liEl2 = document.createElement("li");
var btnEl2 = document.createElement("button");
var liEl3 = document.createElement("li");
var btnEl3 = document.createElement("button");
var liEl4 = document.createElement("li");
var btnEl4 = document.createElement("button");
var ulTag = document.querySelectorAll("ul");

var btnTags = ["btnEl1", "btnEl2", "btnEl3", "btnEl4"];

//Question 1, dynamically generated Elements
h1El1.textContent = "Commonly used data types DO NOT include:";
document.body.append(h1El1);
btnEl1.textContent = "1.strings";
dtEl1.append(btnEl1);
dlEl.append(dtEl1);
document.body.append(dlEl);
btnEl2.textContent = "2.booleans";
liEl2.append(btnEl2);
ulEl.append(liEl2);
document.body.append(ulEl);
btnEl3.textContent = "3.alerts";
liEl3.append(btnEl3);
ulEl.append(liEl3);
document.body.append(ulEl);
btnEl4.textContent = "4.numbers";
liEl4.append(btnEl4);
ulEl.append(liEl4);
document.body.append(ulEl);


//Question 2, dynamically generated Elements
h1El1.textContent = "The condition in an if/else statement is encolosed within ____________.";
document.body.append(h1El1);
btnEl1.textContent = "1.quotes";
liEl1.append(btnEl1);
ulEl.append(liEl1);
document.body.append(ulEl);
btnEl2.textContent = "2.curly brackets";
liEl2.append(btnEl2);
ulEl.append(liEl2);
document.body.append(ulEl);
btnEl3.textContent = "3.parentheses";
liEl3.append(btnEl3);
ulEl.append(liEl3);
document.body.append(ulEl);
btnEl4.textContent = "4.square brackets";
liEl4.append(btnEl4);
ulEl.append(liEl4);
document.body.append(ulEl);

//Question 3, dynamically generated Elements
h1El1.textContent = "Arrays in JavaScript can be used to store _____________.";
document.body.append(h1El1);
btnEl1.textContent = "1. numbers and strings";
liEl1.append(btnEl1);
ulEl.append(liEl1);
document.body.append(ulEl);
btnEl2.textContent = "2. other arrays";
liEl2.append(btnEl2);
ulEl.append(liEl2);
document.body.append(ulEl);
btnEl3.textContent = "3. booleans";
liEl3.append(btnEl3);
ulEl.append(liEl3);
document.body.append(ulEl);
btnEl4.textContent = "4. all of the above";
liEl4.append(btnEl4);
ulEl.append(liEl4);
document.body.append(ulEl);

//Question 4, dynamically generated Elements
h1El1.textContent = "String values must be encolosed within ___________ when being assigned to variables.";
document.body.append(h1El1);
btnEl1.textContent = "1.commas";
liEl1.append(btnEl1);
ulEl.append(liEl1);
document.body.append(ulEl);
btnEl2.textContent = "2.curly brackets";
liEl2.append(btnEl2);
ulEl.append(liEl2);
document.body.append(ulEl);
btnEl3.textContent = "3.quotes";
liEl3.append(btnEl3);
ulEl.append(liEl3);
document.body.append(ulEl);
btnEl4.textContent = "4.parentheses";
liEl4.append(btnEl4);
ulEl.append(liEl4);
document.body.append(ulEl);

//Question 5, dynamically generated Elements
h1El1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
document.body.append(h1El1);
btnEl1.textContent = "1.JavaScript";
liEl1.append(btnEl1);
ulEl.append(liEl1);
document.body.append(ulEl);
btnEl2.textContent = "2.terminal/bash";
liEl2.append(btnEl2);
ulEl.append(liEl2);
document.body.append(ulEl);
btnEl3.textContent = "3.for loops";
liEl3.append(btnEl3);
ulEl.append(liEl3);
document.body.append(ulEl);
btnEl4.textContent = "4.console.log";
liEl4.append(btnEl4);
ulEl.append(liEl4);
document.body.append(ulEl);



//Create a for loop that takes the bullet points off the list items (https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_unordered_none)
// var btnTags = document.querySelectorAll("button")
// for(i=0; i<4; i++){
// btnTags[i].setAttribute("")    
// }




