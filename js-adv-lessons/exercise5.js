// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = []
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
})
// console.log(newArray);
// console.log(array);


//Create an array using map that has all the usernames with a "? to each of the usernames

const questionArray = array.map( user => {
  let { username } = user;
  return username + "?";
});
// console.log(questionArray);
// console.log(array);


//Filter the array to only include users who are on team: red

const redArray = array.filter( user => user.team === 'red');
// console.log(redArray);


//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, user) => acc + user.score, 0);
// console.log('Total Score: ', totalScore);

// (1), what is the value of i?
// 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })

const pureArray = arrayNum.map( num => num * 2);
// console.log('Pure Array: ', pureArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// Start by mapping new array from old array, then for each user, map items with an exclamation mark.

const usersWithSurpriseItems = array.map( user => {
  user.items = user.items.map( item => item + '!');
  return user;
});
// console.log('Users with surprise items: ', usersWithSurpriseItems);


