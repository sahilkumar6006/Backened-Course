mergeSortedArrays([0,2,4,31], [4,6,30])

function mergeSortedArrays(arr1, arr2) {
  let arr = [];
 for(let i =0; i < arr1.length; i++) {
  for(let j =0; j< arr2.length; j++) {
    console.log(arr1[i], arr2[j]);
    
    if(arr[i] < arr[j]) {
      arr[i] = arr1[i]
    }else {
      arr[i]  = arr2[j];
    }
  }
 }
console.log(arr);
}
