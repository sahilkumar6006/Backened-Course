mergeSortedArrays([0,2,4,31], [4,6,30])

function mergeSortedArrays(arr1, arr2) {
  let arr = [];
 let firstArr1 = arr1[0];
 let firstArr2 = arr1[0];
 let i =1;
 let j =1;
 console.log(firstArr1, firstArr2);
 if(arr1.length == 0){
  console.log(arr2);
 }
if(arr2.length == 0) {
  console.log(arr1);
}
 while() {
  console.log(arr1.length, arr2.length)
  if(arr1.length < arr2.length) {
    arr[i].push(arr1[i])
    i++
  }else {
    arr[i].push(arr2[i]);
    j++
  }
 }
 console.log(arr);
}

