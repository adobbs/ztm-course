// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'


const startLength = startLine.length;
const labelLength = '<-- Start line'.length;
const padLength = (startLength - labelLength);

turtle = turtle.padStart(padLength + turtle.length);
rabbit = rabbit.padStart(padLength + rabbit.length);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

// Gets rid of spaces adn then adds = to the end until the string reachs 9 chars.

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// to this:
'my name is Rudolf the reindeer'

Object.entries(obj).map(entry => entry.join(' ')).join(' ');