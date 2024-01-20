let arr = new Array(1000).fill("nemo");

let t0 = performance.now();
for(let i = 0; i < arr.length ; i++) {
  if( arr[i] == "nemo") {
    console.log("Nemo found" + " " + "at" +" " + i);
  }

  
 
}
let t2 = performance.now();
let totaltime = t2 - t0;
console.log(totaltime);