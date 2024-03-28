// When the user inputs a number - checked
// loop from 1 to the entered number - checked
// If the current number is divisible by 3, print "Fizz" - checked
// If the current number is divisible by 5, print "Buzz" - checked
// If the current number is divisibly by 3 and 5, print "FizzBuzz" - checked
// If none of these, print the number the user input - checked

// Let the user input a number when they press a button
function enterFizzBuzz() {
  let answer = parseInt(
    prompt("Please enter a number you would like to FizzBuzz to: ")
  );

  // iterate until you reach the input number
  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // if the number is divisible by 3 with no remainder, Fizz
    else if (i % 3 === 0) {
      console.log("Fizz");
    //   if the number is divisible by 5 with no remainder, buzz
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
        // if no conditions are met, log the next number
      console.log(i);
    }
  }
}
