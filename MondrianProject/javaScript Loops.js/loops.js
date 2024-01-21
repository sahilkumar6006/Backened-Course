let arr = [2,3,4,5,6,7,8];

for(let x in arr) {
  console.log(x);
}


arr.forEach(v => console.log(v));
for(let i =0; i < arr.length; i++) {
  console.log(arr[i]);
}



// arrowFunction
const fun = () => {
  console.log("hello");
}

fun()

let arr2 = arr.map(v => v*v);
console.log(arr2);

