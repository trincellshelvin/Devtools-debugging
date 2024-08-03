// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message);

// Error 2: 
function actionButton() {
  let button = "eventHandler"
  document.querySelector[`#actionButton`]
  button.addEventListener('click')
  console.log("clicked");
}


// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output');
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope
let localMessage = 'Updated message';
function updateMessage() {
  console.log(localMessage);
}
updateMessage();


// Error 7:
document.addEventListener('click', testFunction);

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2));


// Error 9:
let nullVar = null
if (nullVar == null) {
  console.log('nullVar is null');
}



// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log('importantData');

// Error 12: 
testFunction();

// Error 13:
let user = { namee: 'Alice' };
console.log(user.name)

// Error 14: 
let someNumber = 123;
console.log(someNumber.toUpperCase);

// Error 15: 
let greeting = 'Hello, world!';

// Error 16: 
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Error 17:
let five = '5';
if (five === 5) {
  console.log('Five is equal to 5'); // This one should be logged
} else {
  console.log('Five is not equal to 5');
}

// Error 18:
Array.prototype.push = function () {
  console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19:
let x
console.log(x);
x = 5;

// Error 20:
let myString = 'Hello';
myString += 'World';
console.log(myString);

