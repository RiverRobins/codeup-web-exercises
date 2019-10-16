"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ["pizza", "chocolate", "cold water", "anything a vegan won't eat"];

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
console.log(shapes.length);

// TODO: console.log the length of the instructors array
// TODO: console.log the length of the daysOfTheWeek array
// TODO: console.log the length of the favoriteFoods array
console.log(instructors.length);
console.log(daysOfTheWeek.length);
console.log(favoriteFoods.length);

/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);

function printAll(n) {
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}

// TODO: console.log each element of the instructors array
printAll(instructors);
// TODO: console.log the first three elements of the daysOfTheWeek array
printAll(daysOfTheWeek);
// TODO: console.log the first three elements of the favoriteFoods array
printAll(favoriteFoods);

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
function returnLast(n) {
    return n[n.length - 1];
}


/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
printAll(shapes);

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape

for (var i = 0, fav = "triangle"; i < shapes.length; i++) {
    console.log(shapes[i]);
    if (i === fav) {
        alert("That's my favorite shape");
    }
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// TODO: What happens if we change var i = 1? or var i = 2;
// TODO: What are benefits of using loops to iterate?
// TODO: How does the loop know when to stop iterating?

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
printAll(instructors);
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
printAll(daysOfTheWeek);
// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
printAll(favoriteFoods);
// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
for (var i = 0; i < instructors.length; i++) {
    var had = ["vivian", "sophie", "david", "justin"];
    if (had.includes(instructors[i])) {
        alert("Hey, I know " + instructors[i]);
    }
    else {
        alert("I have not had " + instructors[i]);
    }
    console.log(instructors[i]);
}


/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
console.log("For Each");
function printItem(n) {
    console.log(n);
}
shapes.forEach(printItem);

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
pies = ["apple", "cherry", "key lime", "huckleberry"];
pies.forEach(printItem);
// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
instructors.forEach(printItem);
daysOfTheWeek.forEach(printItem);
favoriteFoods.forEach(printItem);