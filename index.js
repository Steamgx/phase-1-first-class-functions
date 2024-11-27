function receivesAFunction(callback) {
  callback()
}
function returnsANamedFunction() {
  return function named() {
    console.log("The girl is Arya.")
  }
}
function returnsAnAnonymousFunction() {
  return function() {
    console.log('The girl has no name.')
  }
}
console.log('Starting execution of receivesAFunction');
receivesAFunction(function() {
  console.log('Callback executed');
});
console.log('Execution of receivesAFunction completed');

console.log('Starting execution of returnsANamedFunction');
var namedFunction = returnsANamedFunction();
namedFunction();
console.log('Execution of returnsANamedFunction completed');

console.log('Starting execution of returnsAnAnonymousFunction');
var anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction();
console.log('Execution of returnsAnAnonymousFunction completed');