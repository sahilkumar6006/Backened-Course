let arr = [3,7,2,-1,4,9];


let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;
console.log(max);
console.log(min);

for(let i =0; i < arr.length; i++) {
  if(arr[i] > max){
    max= arr[i];
  
  }

  if(arr[i ] < min) {
    min = arr[i];
   
  }
}


let secondMax = Number.MIN_VALUE;
let secondMin = Number.MAX_VALUE;

for(let i =0; i < arr.length; i++){
  if(arr[i] > secondMax && arr[i] < max) {
    secondMax = arr[i];
   
  }


  if(arr[i] < secondMin && arr[i] >min) {
    secondMin = arr[i];
    
  }
}

console.log(secondMax);
console.log(secondMin);