"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin
// if(isAdmin){
//     show navbar
// }
//Together: Send a 20% off coupon if its users birthday
// if (is birthday) {
//     send birthday thing;
// }
//Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRaining = false;
// if (isRaining) {
//     alert("It be raining fool");
// }

//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var userMoney = 200, total = 400;

if (userMoney >= total) {
    alert("You may purchase");
}
else {
    alert("Get some more money mr. broke");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 1;

function gameOver() {
    if (numberOfLives === 0) {
        alert("Sorry, game over");
    }
}
gameOver();

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "snowing";
function isSnowing() {
    if (weather === "snowing") {
        alert("it's snowing");
    }
}
isSnowing();

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = prompt("enter a number: ");
function numGreaterThan10(n) {
    if (n > 10) {
        alert("true");
    }
    else {
        alert("false");
    }
}
numGreaterThan10(numberInput);


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//done

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = false;

function checkRank() {
    if (isAdmin) {
        alert("display admin navbar");
    }
    else {
        alert("display normal navbar");
    }
}

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRaining = true;

function checkWeather() {
    if (isRaining) {
        alert("it's raining boiiii");
    }
    else {
        alert("have a nice day or whatever");
    }
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
function checkIfGameIsOver(n) {
    if (n === 0) {
        return "Sorry, game over";
    }
    else {
        return "Next level";
    }
}
console.log(checkIfGameIsOver(numberOfLives));

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
function isSnowingv2() {
    if (weather === "snowing") {
        return "it's snowing";
    }
    else {
        return "check back later for more details";
    }
}
console.log(isSnowingv2(weather));

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
function numGreaterThan10v2(n) {
    if (n > 10) {
        alert("true");
    }
    else {
        alert("number is less than 10");
    }
}

console.log(numGreaterThan10v2(numberInput));

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 
//done

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
//done
    
    
// SHOULD WE DELETE STUFF EXAMPLE

var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');

console.log("The value of the confirm is: " + weShouldDeleteStuff);

if (weShouldDeleteStuff) {
    // delete all the things...
    alert("We are deleting everything...");
} else {
    alert("Operation Canceled!");
}


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

function confirmAge(n) {
    if (n === true) {
        alert("You may proceed");
    }
    else {
        alert("you may not proceed");
    }
}
confirmAge(confirm("confirm you are 13+ years old"));

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
weather = "raining";

function checkWeather2(n) {
    if (n === "snowing") {
        return "Its snowing";
    }
    else if (n === "raining") {
        return "Its raining";
    }
    else if (n === "hurricane") {
        return "Welcome to Florida";
    }
    else {
        return "Have a nice day";
    }
}
console.log(checkWeather2(weather));

//Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
}  else if (pizzaPreference === "ham"){
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
var traficLight = "red";

function checkLight(n) {
    alert("Approaching " + n + " light");
    if (n === "red") {
        return "STOP";
    }
    else if (n === "yellow") {
        return "SPEED UP TO MAKE IT";
    }
    else {
        return "GO";
    }
}
alert(checkLight(traficLight));



// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license. 

function permitLoicense(n, hasPermit = false) {
    if (n < 15) {
        return "Not eligible for permit";
    }
    else {
        if (n === 15) {
            return "Eligible for permit";
        }
        else if (n > 15 && hasPermit === true) {
            return "Eligible for loicense";
        }
        else {
            return "Not eligible for loicense"
        }
    }
}
console.log(permitLoicense(15));


// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

weather = "sunny";
var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

weatherMessage = weather === "rainy" ? "Its raining" : "Have a nice day";
console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

weather = prompt("enter weather(sunny, rainy, or snow):");

switch (weather) {
    case "snow":
        console.log("bold of you to assume it snows here");
        break;
    case "sunny":
        console.log("yup, were in texas. its sunny");
        break;
    case "rainy":
        console.log("hecc it be raining");
        break;
    default:
        console.log("Im just as clueless as you");
}

//TODO: Rewrite the intersection function from earlier as a switch statement.

switch (traficLight) {
    case "red": {
        console.log("Stop(in front of cops)");
        break;
    }
    case "green": {
        console.log("G O");
        break;
    }
    case "yellow": {
        console.log("SPEED");
        break;
    }
}

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

var allowance = 5, doneShopping = true;
if (doneShopping === true) {
    allowance += 5;
}

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

if (weather === "snow") {
    console.log("its snowing");
}
else if (weather === "rain") {
    console.log("its raining");
}
else  if (weather === "sun") {
    console.log("it be sunny");
}
else {
    console.log("overcast");
}

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

var theme = themeInput === black ? setTheme(dark) : setTheme(light);
