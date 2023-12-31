function linearSearch(arr, x) {
  for(let i =0; i < arr.lenght; i++) {
    if(arr [i] === x) {
      return i;
    }
  }
  return NaN;
}

// function binarySearch {
//   //some funcion 
// }

module.exports ={
  linear: linearSearch,
  
}