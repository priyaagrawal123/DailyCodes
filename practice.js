console.log("i m".length);  //ans: 3 //length= it counts number and spaces also
console.log("remove tension ko bye bye".toUpperCase());  //methodName()  example:-toUpperCase,trim()
console.log(Math.random(2)); //it gives random bet 0 and 1
console.log(Math.random(2) * 50); //0 and 50 is between
console.log(Math.floor(Math.random() * 50));  //nearest int
console.log(Math.floor(3) * 30);
console.log(Math.ceil(40));   //finds the smallest integer grater than or equal to 40 
//for more refer mdn built in objects
// console.log(Math.isInteger(2));  /   //checks integer or not in boolean form

// camelCasing = camelCasing;
let cheh;
console.log(cheh);

var priya = "";
console.log(priya);
//string interpolation -template literal 
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

var userName = '';
userName ? console.log('Hello,Jane') : console.log("Hello!"); //this ternary expreassion it is used to write it in short

var userQuestion = "we want to ask the Magic Eight Ball";
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);

//if else statements
var eightBall = '';
if (randomNumber === 0) {
  console.log('It is certain');
}
else if (randomNumber === 1) {
  console.log('It is decidedly so');
}
else if (randomNumber === 2) {
  console.log('Reply hazy try again');
}
else if (randomNumber === 3) {
  console.log('Cannot predict now');
}
else if (randomNumber === 4) {
  console.log('Do not count on it');
}
else {
  console.log('Signs point to yes');
}
//switch
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;

  case 1:
    console.log('It is decidedly so');
    break;

  default:
    console.log("no should occur this");

}
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);



//arrow function
const squareNum = (num) => {
  return num * num;
};

//we can also write like this
const squareNum = num => num * num;


//  1 The parentheses around num have been removed, since it has a single parameter.
//  2 The curly braces { } have been removed since the function consists of a single-line block.
//  3 The return keyword has been removed since the function consists of a single-line block


const userInput = prompt("please enter your name"); //this is used to take input from user

! //bang operator it is called

//array
// Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans)

//to add element in the array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("Priya", "priy");

console.log(chores);


//to remove in this//
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.pop("wash dishes", "do laundry");

console.log(chores);
//remove
groceryList.shift("orange juice");
console.log(groceryList);
//add in the----
groceryList.unshift("popcorn");
console.log(groceryList);
//make seperate array
console.log(groceryList.slice(2, 5))
//indexof the elements
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
const a = [1, 2, 3, 4, 56, 68];//join
console.log(a.length);
console.log(a.join());
//Function
int add(int x, int y) {
  return x + y;         // a parameter is part of the function/procedure/method signature 
}
int result = add(123, 456);     //an argument is the actual value supplied at run-time and/or call-site for the parameter.

//nested array
When an array contains another array it is known as a nested array.Examine the example below:

const nestedArr = [[1], [2, 3]];

//loop
for (loop = 5; loop < 11; loop++) {
  console.log(loop);
} output: 5, 6, 7, 8, 9, 10

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//do while
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

//ITERATION
every() = returns true or false
forEach() = undefined
filter()new array
reduce()returns single value

//forEach() callback methos
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//map
const numbers = [1, 2, 3, 4, 5];


const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);
//filter() method
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


//Objects//
//for changing color
spaceship.color = "glorious gold";
spaceship.numEngines = 7;   //for adding
delete spaceship['Secret Mission'];



