// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const myself = {
  firstName: 'Nick',
  lastName: 'Rohde',
  'favorite food': 'Cheese',
  bestFriend: {
      firstName: 'Jon',
      lastName: 'Sayer',
      'favorite food': 'Cookies'
  }
}

// 2. console.log best friend's firstName and your favorite food

console.log(`Best friend name: ${myself.bestFriend.firstName}`);
console.log(`Favorite food: ${myself['favorite food']}`);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const game = [[`-`,`O`,`-`],[`-`,`X`,`O`],[`X`,`-`,`X`]];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.

game[0][2] = `O`;


// 5. Log the grid to the console.

console.log(game[0]);
console.log(game[1]);
console.log(game[2]);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

let myEmail = `ncrohde@uw.edu`;

const testRegEx  = new RegExp(`^[^\s]+@[^\s]+\.[^\s]+$`);

console.log(testRegEx.test(myEmail));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

const assignmentDate = '1/21/2019';

const dateArray = assignmentDate.split('/');

const assignmentDateObj = new Date(dateArray[2], dateArray[0] - 1, dateArray[1]);

console.log(`Assignment date: ${assignmentDateObj}`);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const dueDate = new Date(assignmentDateObj.getTime() + (7 * 24 * 60 * 60 * 1000)); 

console.log(`Due date: ${dueDate}`);


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const timeTag = `<time datetime="${dueDate.getFullYear()}-${('0' + (dueDate.getMonth()+1)).slice(-2)}-${dueDate.getDate()}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`;


// 10. log this value using console.log

console.log(timeTag);
