// declare variables
var num1;
var num2;
var main = document.querySelector('main');

//Announce the programme
alert('Lets do some Math!');

// Collect data
num1 = prompt('Please Type your first number');
num1 = parseFloat(num1);
num2 = prompt('Please Type your second number');
num2 = parseFloat(num2);

// If statement to see if the user has typed in a number and a check that the number is not a 0

if (isNaN(num1) || isNaN(num2)) {
  main.innerHTML = `One or more is not a number, Please reload and try again!`;
} else if (num1 === 0 || num2 === 0) {
  main.innerHTML = `This can't be a value of 0, Please reload and try again!`;
} else {
  // Build the HTML message
  var message = '<h1>Math with the numbers ' + num1 + ' and ' + num2 + '</h1>';
  message += num1 + ' + ' + num2 + ' = ' + (num1 + num2);
  message += '<br>';
  message += num1 + ' * ' + num2 + ' = ' + num1 * num2;
  message += '<br>';
  message += num1 + ' / ' + num2 + ' = ' + num1 / num2;
  message += '<br>';
  message += num1 + ' - ' + num2 + ' = ' + (num1 - num2);
  main.innerHTML = message;
}
