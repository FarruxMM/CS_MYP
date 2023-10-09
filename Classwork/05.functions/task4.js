// Task 1
// Create a function that takes a string and returns a string in which each character is repeated once.
function doubleItem(inputString) {

     let doubler=[]
     splitter=inputString.split('')
     //console.log(splitter);
     doubler=splitter.map(item => item+=item)
     //console.log(doubler);
     inputString=doubler.join("")
     console.log(inputString);  

}
console.log(doubleItem("String"));  //"SSttrriinngg"
console.log(doubleItem("Hello World!"));  // "HHeelllloo  WWoorrlldd!!"






// Task 2
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
function numSplit(numberz) {

    a=Math.round(numberz/2)
    b=numberz-a
    numdiv=[b,a]
    console.log(numdiv);

}

console.log(numSplit(4))  // [2, 2]
console.log(numSplit(10)) // [5, 5]
console.log(numSplit(11)) // [5, 6]


// Task 3
// Create a function that takes an array of numbers and returns the second largest number.

// function secondLargest(bignumber) {
Bignumber=[]




//}

console.log(secondLargest([10, 40, 30, 20, 50]));  //  40

console.log(secondLargest([25, 143, 89, 13, 105]));  // 105

// Task 4
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNum(arr) {

}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));  //5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // 10


// Task 5
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(sentence) {

}


console.log(findNemo("I am finding Nemo !"));  // "I found Nemo at 4!"
console.log(findNemo("Nemo is me"))  //"I found Nemo at 1!"
console.log(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"))  // "I can't find Nemo :(" */