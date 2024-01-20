const arr= ["Nemo"];

function findNemo(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'Nemo' ) {
      console.log("We found the Nemo" + "At the index"  + " "+ i );
    }
  }
} 

findNemo(arr);