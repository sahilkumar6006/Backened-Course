// Basic function
function f(a,b) {
  const sum = a +b;
  return sum;
}

console.log(f(3,4));

//Anonymous Function

let f1 = function(a,b){
  const sum = a +b;
  return sum;

}

console.log(f1(3,4));

//IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)(IIFE)
const result = function(a,b) {
  const sum = a +b;
  return sum;
}(3,4);
console.log(result);


//function within function
function createFunction() {
  function f(a,b) {
    const sum = a +b;
    return sum;
  }
  return f;
}

const f4 = createFunction();
console.log(f(3,4));

//function HOsting
function createFunction2() {
  return f;
  function f(a,b) {
    const sum = a +b;
    return sum;
  }
}

const f5= createFunction2();
console.log(f5(3,4));