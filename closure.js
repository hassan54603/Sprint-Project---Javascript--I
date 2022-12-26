// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation (Min 50 words):

/*
When a function is created, it contains a function definition and a closure. 
The closure is a little backpack of all the variables that were available 
to it when it was created, including variables in the global scope and variables in 
the calling scope (and its calling scope, and its calling scope, and its calling scope...). 
After a function is executed, internal variables no longer exist as var as the global execution 
stack is concerned, but the function keeps its little backpack of variables that were in scope.
*/
