//Step 1: Test the javascript file to make sure it's linked correctly
console.log("WE LIVE BABY!");
//Step 2: Listen for the click to make the opening page content disappear

//Step 3: Simultaneously, dynamically create the question with buttons that have answer options
var h1El1 = document.createElement("h1");
var ulEl = document.createElement("ul");
var liEl1 = document.createElement("li");
var btnEl1 = document.createElement("button");
var liEl2 = document.createElement("li");
var btnEl2 = document.createElement("button");
var liEl3 = document.createElement("li");
var btnEl3 = document.createElement("button");
var liEl4 = document.createElement("li");
var btnEl4 = document.createElement("button");


h1El1.textContent = "Commonly used data types DO NOT include:";
document.body.append(h1El1);
btnEl1.textContent = "1. strings";
liEl1.append(btnEl1);
ulEl.append(liEl1);
document.body.append(ulEl);
btnEl2.textContent = "2. booleans";
liEl2.append(btnEl2);
ulEl.append(liEl2);
document.body.append(ulEl);
btnEl3.textContent = "3. alerts";
liEl3.append(btnEl3);
ulEl.append(liEl3);
document.body.append(ulEl);
btnEl4.textContent = "4. numbers";
liEl4.append(btnEl4);
ulEl.append(liEl4);
document.body.append(ulEl);


//Create a for loop that takes the bullet points off the list items (https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_unordered_none)




