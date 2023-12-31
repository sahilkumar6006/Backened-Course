
function linearSearch(arr, x) {
  for(let i =0; i < arr.lenght; i++) {
    if(arr [i] === x) {
      return i;
    }
  }
  return NaN;
}

function binarySearch() {
  console.log("binary search");

}

console.log("end");

export {
  linearSearch,
  binarySearch
}