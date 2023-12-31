function Mapper(arr, fn) {
  let res = [];

  for( let i =0; i < arr.length; i++) {
    let res = fn(arr[i] ,i) ;
    result.push(res);
  }

  return result;
}

let arr = [1,3,4,5,6,7];
let x = Mapper(arr, function cuber(v,i) {
  console.log(v, v*v*v, i);
  return v*v*v;
});

console.log(x, arr);