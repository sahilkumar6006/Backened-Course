// function createAdder(a) {
//   function f(b) {
//     const sum = a +b;
//     return sum;
//   }
//   return f;
// }

// const f = createAdder(3);
// console.log(f(4));

function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}

const addTo2 = createAdder(2);
addTo2(5);

console.log(addTo2);